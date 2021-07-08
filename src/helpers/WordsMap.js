class WordsMap {
	constructor() {
		this.wordsMap = new Map();
	}

	getWordCount(word) {
		return this.wordsMap.get(word);
	}

	initWordCount(word) {
		this.wordsMap.set(word, 1);
	}

	incrementWordCount(word) {
		const currentCount = this.wordsMap.get(word) || 0;
		this.wordsMap.set(word, currentCount + 1);
	}

	deleteWord(word) {
		this.wordsMap.delete(word);
	}

	wordExist(word) {
		return this.wordsMap.has(word);
	}

	getMostOccurentWords() {
		// get the max value in the whole map
		const maxOccurence = Math.max(...this.wordsMap.values());

		// find all keys having that max value
		const wordsMostOccured = [];
		for (let [key, value] of this.wordsMap.entries()) {
			if (value === maxOccurence) wordsMostOccured.push({ [key]: value });
		}

		return wordsMostOccured;
	}
}
