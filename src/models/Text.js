const mongoose = require('mongoose');

const TextSchema = new mongoose.Schema(
	{
		version: {
			en: String,
			fr: String,
			ar: String,
		},
	},
	{ collection: 'texts' }
);

module.exports = mongoose.model('Text', TextSchema);
