const express = require('express');
const router = express.Router();
const Text = require('../../../models/Text');

/**
 * @route POST /text/
 * @desc Upload and store text with unique Id to database
 * @desc Public
 */
router.post('/', (req, res) => {
	const newText = new Text(
		JSON.parse(
			JSON.stringify({
				version: {
					en: req.body.en || '',
					fr: req.body.fr || '',
					ar: req.body.ar || '',
				},
			})
		)
	);

	newText.save().then((text) => res.json(text));
});

module.exports = router;
