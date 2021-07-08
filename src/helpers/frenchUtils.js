const FRENCH_PUNCTUATION = [
	`.`,
	`?`,
	`!`,
	`,`,
	`;`,
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

// any word to ignore should be added here, in lowercase
const FRENCH_IGNORE_WORDS = [
	...FRENCH_PUNCTUATION,
	...INTELLECTUAL_PROPERTY_SYMBOLS,
	// 'la',
	// 'de',
	// 'suivant',
];

module.exports = {
	FRENCH_IGNORE_WORDS: FRENCH_IGNORE_WORDS,
};
