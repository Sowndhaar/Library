import { Schema, model } from "mongoose";
const bookSchema = new Schema({
  Bookid: { type: String },
  Bookname: { type: String },
  Author: { type: String },
  Publishedyear: { type: String },
  Domain: { type: String },
  Pages: { type: String }
});
const Book = model("Book", bookSchema);
export default Book;
