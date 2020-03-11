const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Defining schema for book object
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

//Making a model from the schema
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;