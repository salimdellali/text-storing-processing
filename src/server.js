const express = require('express');
const cors = require('cors');
require('dotenv/config');
require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/text', require('./routes/api/text/getText'));

app.listen(PORT, (err) => {
	if (err) console.error(err);
	console.log(`Server started on port ${PORT} ...`);
});
