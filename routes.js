const express = require('express');
const Book = require('../models/book');
const router = express.Router();

// Create a book
router.post('/', async (req, res) => {
  try {
    const { title, author, createdDate } = req.body;
    const book = new Book({ title, author, createdDate });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch a book by ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Search book by name
router.get('/search', async (req, res) => {
  try {
    const name = req.query.name;
    const books = await Book.find({ title: new RegExp(name, 'i') });
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all books with sorting
router.get('/', async (req, res) => {
  try {
    const sortBy = req.query.sortBy;
    let sortOption = {};
    if (sortBy === 'author') sortOption.author = 1;
    else if (sortBy === 'createdDate') sortOption.createdDate = 1;
    const books = await Book.find().sort(sortOption);
    res.json(books);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const { title, author, createdDate } = req.body;
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { title, author, createdDate },
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a book
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;