const express = require('express');
const router = express.Router();
const Text = require('../../../models/Text');
const { isValidObjectId } = require('../../../helpers/mongooseUtils');

/**
 * @route PUT /text/textId
 * @desc Update text content
 * @access Public
 */
router.put('/:textId', (req, res) => {
	const textId = req.params.textId;

	if (!isValidObjectId(textId)) {
		res
			.status(400)
			.json({ message: 'Invalid text ID, input a valid text ID!' });
		return;
	}

	Text.exists({ _id: textId })
		.then((found) => {
			if (!found) {
				res.status(400).json({ message: "Text ID doesn't exist" });
				return;
			}

			const updatedText = {
				version: {
					en: req.body.en || '',
					fr: req.body.fr || '',
					ar: req.body.ar || '',
				},
			};

			Text.updateOne({ _id: textId }, { $set: updatedText }).then((text) => {
				res.json(text);
			});
		})
		.catch((err) => {
			res.status(500).send('Something went wrong!');
		});
});

module.exports = router;
