const express = require('express');
const router = express.Router();
const Text = require('../../../models/Text');
const WordsMap = require('../../../helpers/WordsMap');
let JsLingua = require('jslingua');

/**
 * @route	GET /text/mostOccurrent
 * @desc	Get the most recurrent word in the whole text database
 * @access	Public
 */
router.get('/', (req, res) => {
	Text.find()
		.exec()
		.then((texts) => {
			const mostOccurentWordsInDatabase = getMostOccurentWordsInDatabase(texts);
			res.json(mostOccurentWordsInDatabase);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;

function getMostOccurentWordsInDatabase(texts) {
	const EngWordsMap = new WordsMap();
	const FraWordsMap = new WordsMap();
	const AraWordsMap = new WordsMap();

	texts.forEach((text) => {
		populateEngWordsMap(text, EngWordsMap);
		populateFraWordsMap(text, FraWordsMap);
		populateAraWordsMap(text, AraWordsMap);
	});

	const topWordsLanguages = {
		mostOccurrentEnglishWords: EngWordsMap.getMostOccurentWords(),
		mostOccurrentFrenchWords: FraWordsMap.getMostOccurentWords(),
		mostOccurrentArabicWords: AraWordsMap.getMostOccurentWords(),
	};

	const maxOccurenceInDatabaseCount = Math.max(
		EngWordsMap.getMostOccurentWordCount(),
		FraWordsMap.getMostOccurentWordCount(),
		AraWordsMap.getMostOccurentWordCount()
	);

	let mostOccurentWordsInDatabase = getMostOccurentWordsFromTopWordsLanguages(
		topWordsLanguages,
		maxOccurenceInDatabaseCount
	);

	return mostOccurentWordsInDatabase;
}

function populateEngWordsMap(text, EngWordsMap) {
	const { ENGLISH_IGNORE_WORDS } = require('../../../helpers/englishUtils');
	const englishTextLowerCased = text.version.en.toLowerCase();

	let EngMorpho = JsLingua.gserv('morpho', 'eng');
	const getEnglishWords = EngMorpho.gwords(englishTextLowerCased);

	const sanitizedEnglishWords = getEnglishWords.filter(
		(word) => !ENGLISH_IGNORE_WORDS.includes(word)
	);

	sanitizedEnglishWords.forEach((word) => {
		if (EngWordsMap.wordExist(word)) EngWordsMap.incrementWordCount(word);
		else EngWordsMap.initWordCount(word);
	});
}

function populateFraWordsMap(text, FraWordsMap) {
	const { FRENCH_IGNORE_WORDS } = require('../../../helpers/frenchUtils');
	const frenchTextLowerCased = text.version.fr.toLowerCase();

	let FraMorpho = JsLingua.gserv('morpho', 'fra');
	const getFrenchWords = FraMorpho.gwords(frenchTextLowerCased);

	const sanitizedFrenchWords = getFrenchWords.filter(
		(word) => !FRENCH_IGNORE_WORDS.includes(word)
	);

	sanitizedFrenchWords.forEach((word) => {
		if (FraWordsMap.wordExist(word)) FraWordsMap.incrementWordCount(word);
		else FraWordsMap.initWordCount(word);
	});
}

function populateAraWordsMap(text, AraWordsMap) {
	const { ARABIC_IGNORE_WORDS } = require('../../../helpers/arabicUtils');
	const arabicText = text.version.ar;

	let AraMorpho = JsLingua.gserv('morpho', 'ara');
	const getArabicWords = AraMorpho.gwords(arabicText);

	const sanitizedArabicWords = getArabicWords.filter(
		(word) => !ARABIC_IGNORE_WORDS.includes(word)
	);

	sanitizedArabicWords.forEach((word) => {
		if (AraWordsMap.wordExist(word)) AraWordsMap.incrementWordCount(word);
		else AraWordsMap.initWordCount(word);
	});
}

function getMostOccurentWordsFromTopWordsLanguages(
	topWordsLanguages,
	maxOccurenceInDatabaseCount
) {
	let mostOccurentWordsInDatabase = [];

	for (const language in topWordsLanguages) {
		if (topWordsLanguages[language].count === maxOccurenceInDatabaseCount)
			mostOccurentWordsInDatabase.push({
				[language]: topWordsLanguages[language].words,
			});
	}

	return mostOccurentWordsInDatabase;
}
