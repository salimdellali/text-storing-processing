const ENGLISH_PUNCTUATION = [
	`.`,
	`?`,
	`!`,
	`,`,
	`;`,
	`:`,
	`–`,
	`—`,
	`[`,
	`]`,
	`(`,
	`)`,
	`{`,
	`}`,
	`'`,
	`"`,
	`...`,
	`***`,
];

const ENGLISH_IGNORE_WORDS = [];

// let JsLingua = require('jslingua');
// let EngMorpho = JsLingua.gserv('morpho', 'eng');
// console.log(EngMorpho.gwords('Where is Dr. Whatson'));

// let AraMorpho = JsLingua.gserv('morpho', 'ara');
// console.log(
// 	AraMorpho.gwords(
// 		'ونحن نرى أن هذه الحقائق واضحة بذاتها ، وأن جميع الرجال خلقوا متساوين ، وأن خالقهم منحهم حقوقا معينة غير قابلة للتصرف ، ومن بين هذه الحقوق الحياة والحرية والسعي إلى تحقيق السعادة'
// 	)
// );
// let FraMorpho = JsLingua.gserv('morpho', 'fra');

// const english =
// 	'The artifact was recovered probably in July 1901 from the Antikythera shipwreck off the Greek island of Antikythera. (6) Believed to have been designed and constructed by Greek scientists; the instrument has recently been dated to 205 BC.';
// const french =
// 	'L’artéfact a probablement été récupéré en juillet 1901 du naufrage d’Antikythera au large de l’île grecque d’Antikythera. (6) On pense qu’il a été conçu et construit par des scientifiques grecs; l’instrument a récemment été daté à 205 BC.';
// const arabic = `تم استعادة القطعة الأثرية ربما في يوليو 1901 من حطام سفينة Antikythera قبالة جزيرة Antikythera اليونانية. (6) يعتقد أن العلماء اليونانيين قد صمموا وشيدوا ؛ وقد يرجع تاريخ الصك مؤخرا إلى عام 205 قبل الميلاد.`;

// console.log(arabic);
// console.log(AraMorpho.gwords(arabic));

// console.log(FraMorpho.gwords(french));

// const shots = [
// 	{ id: 1, amount: 2 },
// 	{ id: 2, amount: 4 },
// 	{ id: 3, amount: 52 },
// 	{ id: 4, amount: 36 },
// 	{ id: 5, amount: 13 },
// 	{ id: 6, amount: 33 },
// ];

// var obj = { a: 1, b: 2, undefined: 1 };

// console.log(Object.keys(shots).reduce((a, b) => (shots[a] > shots[b] ? a : b)));
