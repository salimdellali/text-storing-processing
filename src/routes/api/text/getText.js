const express = require('express');
const buildPaginator = require('pagination-apis');
const router = express.Router();
const Text = require('../../../models/Text');

/**
 * @route	GET /text
 * @desc	Fetch list of text with the support of pagination
 * @access	Public
 */
router.get('/', async (req, res) => {
	const count = await Text.countDocuments();

	Text.find()
		.exec()
		.then((texts) => {
			const options = setOptions({ req, count });
			const { paginate } = buildPaginator(options);
			const concernedTexts = sliceTexts({
				page: options.page,
				limit: options.limit,
				texts,
			});
			res.json(paginate(concernedTexts, count));
		})
		.catch((err) => {
			res.json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;

function setOptions({ req, count }) {
	return {
		limit: req.query.limit
			? !isNaN(req.query.limit)
				? req.query.limit
				: count
			: count,
		page: req.query.page ? (!isNaN(req.query.page) ? req.query.page : 1) : 1,
		url: `${req.protocol}://${req.get('host')}/text`,
	};
}

function sliceTexts({ page, limit, texts }) {
	const startIndex = (page - 1) * limit;
	const endIndex = page * limit;
	return texts.slice(startIndex, endIndex);
}
