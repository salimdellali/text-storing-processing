const express = require('express');
const cors = require('cors');
require('dotenv/config');
require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/text', require('./routes/api/text/postText'));
app.use('/text', require('./routes/api/text/getText'));
app.use('/text', require('./routes/api/text/putTextId'));
app.use('/text', require('./routes/api/text/getTextIdCount'));
app.use('/text', require('./routes/api/text/getTextIdCountLanguage'));
app.use('/text', require('./routes/api/text/getTextIdCountLanguage'));
app.use(
	'/text/mostOccurrent',
	require('./routes/api/text/getTextMostOccurrent')
);

app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(`Server started on port ${PORT} ...`);
});
