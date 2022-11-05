const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const books = require('./routes/books');
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use('/api/v1/books', books);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


