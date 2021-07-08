const express = require('express');
const wordCount = require('word-count');
const ObjectId = require('mongoose').Types.ObjectId;
const router = express.Router();
const Text = require('../../../models/Text');

/**
 * @route	GET /text/:textId/count
 * @desc	Fetch total word number of given a text
 * @access	Public
 */
router.get('/:textId/count', (req, res) => {
	const textId = req.params.textId;

	if (!isValidObjectId(textId)) {
		res.json({ message: 'Invalid text ID, input a valid text ID!' });
		return;
	}

	Text.findById(textId)
		.exec()
		.then((text) => {
			const wordCountAll = {
				wordCountEn: wordCount(text.version.en),
				wordCountFr: wordCount(text.version.fr),
				wordCountAr: wordCount(text.version.ar),
			};
			res.json(wordCountAll);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
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
