const express = require('express');
const wordCount = require('word-count');
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();
const Text = require('../../../models/Text');

/**
 * @route	GET /text/:textId/count/:language
 * @desc	Fetch total word number based on given text for specific languages ex: fr, ar, en
 * @access	Public
 */
router.get('/:textId/count/:language', (req, res) => {
	const textId = req.params.textId;
	const language = req.params.language;

	if (!isValidObjectId(textId)) {
		res
			.status(400)
			.json({ message: 'Invalid text ID, input a valid text ID!' });
		return;
	}

	Text.findById(textId)
		.exec()
		.then((text) => {
			let responseMessage;
			let statusCode = 200;
			switch (language) {
				case 'en':
					responseMessage = { wordCountEn: wordCount(text.version.en) };
					break;
				case 'fr':
					responseMessage = { wordCountFr: wordCount(text.version.fr) };
					break;
				case 'ar':
					responseMessage = { wordCountAr: wordCount(text.version.ar) };
					break;
				default:
					responseMessage = {
						message: 'language code not supported!',
					};
					statusCode = 400;
			}
			res.status(statusCode).json(responseMessage);
		})
		.catch((err) => {
			res.status(500).json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;

function isValidObjectId(id) {
	if (ObjectId.isValid(id)) {
		if (String(new ObjectId(id)) === id) return true;
		return false;
	}
	return false;
}
