import { Schema, model } from "mongoose";
const BookSchema = new Schema(
  {
    Bookid: String,
    Bookname: String,
    Author: String,
    Publishedyear: String,
    Domain: String,
    Pages: String,
  },
  {
    timestamps: true,
  }
);
const Book = model("Book", BookSchema);
export default Book;
