const ARABIC_PUNCTUATION = [
	`.`,
	`؟`,
	`!`,
	`،`,
	`؛`,
	`:`,
	`-`,
	`–`,
	`—`,
	`[`,
	`]`,
	`(`,
	`)`,
	`{`,
	`}`,
	`…`,
	`...`,
	`. . .`,
	`***`,
	`«`,
	`»`,
	`<<`,
	`>>`,
	`/`,
	`\\`,
	`"`,
	`“`,
	`”`,
	`'`,
	`’`,
	`‘`,
	`\``,
];

const INTELLECTUAL_PROPERTY_SYMBOLS = [`©`, `℗`, `®`, `℠`, `™`];

// any word toignore should be added here, in lowercase
const ARABIC_IGNORE_WORDS = [
	...ARABIC_PUNCTUATION,
	...INTELLECTUAL_PROPERTY_SYMBOLS,
];

module.exports = {
	ARABIC_IGNORE_WORDS: ARABIC_IGNORE_WORDS,
};
