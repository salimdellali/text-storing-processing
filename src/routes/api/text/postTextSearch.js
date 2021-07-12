const express = require('express');
const router = express.Router();
const Text = require('../../../models/Text');
const Fuse = require('fuse.js');

/**
 * @route POST /text/search?q=
 * @desc Fetch text based on fuzzy search using query q
 * @access Public
 */
router.post('/search', (req, res) => {
	const searchQuery = req.query.q;

	Text.find()
		.exec()
		.then((texts) => {
			const options = {
				// isCaseSensitive: false,
				// includeScore: false,
				shouldSort: true,
				includeMatches: true,
				// findAllMatches: true,
				// minMatchCharLength: 1,
				// location: 0,
				// threshold: 0.6,
				// distance: 100,
				// useExtendedSearch: false,
				// ignoreLocation: false,
				// ignoreFieldNorm: false,
				keys: ['version.en', 'version.fr', 'version.ar'],
			};

			const fuse = new Fuse(texts, options);
			const pattern = searchQuery;
			const searchResult = fuse.search(pattern);

			let htmlResponse = prepareHtmlResponse(searchResult);
			htmlResponse
				? res.send(htmlResponse)
				: res.send('Nothing has been found with the provided query');
		})
		.catch((err) => {
			res.status(500).json({ message: 'error has occured : ' + err });
		});
});

module.exports = router;

function prepareHtmlResponse(searchResult) {
	let htmlResponse = '';
	searchResult.forEach((finding) => {
		const { _id } = finding.item;
		const { matches } = finding;
		htmlResponse += `<h3>id: ${_id}</h3>`;

		matches.forEach((match) => {
			htmlResponse += tagMatch(match);
		});
		htmlResponse += `<hr/>`;
	});
	return htmlResponse;
}

function tagMatch(match) {
	let htmlResponse = '';
	const { key, indices } = match;

	let newValue = match.value.split('');
	indices.forEach((indice) => {
		let [startIndice, endIndice] = indice;
		// style all the characters that are between the start and end indices
		while (startIndice <= endIndice) {
			newValue.splice(
				startIndice,
				1,
				`<b style="color:red">${newValue[startIndice]}</b>`
			);
			startIndice++;
		}
	});
	newValue = newValue.join('');

	htmlResponse += `
                        <li><b>${key}</b>: ${newValue}<br/></li>
            `;
	return htmlResponse;
}
