const ENGLISH_PUNCTUATION = [
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
const ENGLISH_IGNORE_WORDS = [
	...ENGLISH_PUNCTUATION,
	...INTELLECTUAL_PROPERTY_SYMBOLS,
	// 'the',
];

module.exports = {
	ENGLISH_IGNORE_WORDS: ENGLISH_IGNORE_WORDS,
};
