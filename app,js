const express = require('express');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');

const app = express();
app.use(express.json());

connectDB();

app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));