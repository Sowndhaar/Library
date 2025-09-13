import Book from "../models/book.model.js";
export const BookIndex = async (req, res) => {
  try {
    const { sortBy, order } = req.query;

    let sortOptions = {};
    if (sortBy) {
      const sortField = sortBy.toLowerCase() === "author" ? "Author" : "createdAt";
      sortOptions[sortField] = order === "desc" ? -1 : 1;
    }
    const books = await Book.find().sort(sortOptions);
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const BookCreate = async (req, res) => {
  try {
    console.log("📥 Incoming Book Data:", req.body);
    const newBook = new Book(req.body);
    const savedBook = await newBook.save();
    return res.status(201).json(savedBook);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
export const BookId = async (req, res) => {
  try {
    const { id } = req.params;
    const searchBook = await Book.findById(id);
    if (!searchBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(searchBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const BookName = async (req, res) => {
  try {
    const { name } = req.query;
    const searchResults = await Book.find({
      Bookname: new RegExp(name, "i"),
    });
    res.json(searchResults);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const BookUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(updatedBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const BookDelete = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
