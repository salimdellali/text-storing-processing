const express = require('express');
const router = express.Router();
const Text = require('../../../models/Text');

/**
 * @route	GET api/attendees
 * @desc	Get all attendees
 * @access	Public
 */
router.get('/', (req, res) => {
	Text.find()
		.exec()
		.then((texts) => {
			res.json(texts);
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;
