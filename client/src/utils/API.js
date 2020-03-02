import axios from "axios";

export default {
  // Grab books from Google API based on query
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Grab all saved books from mongoDB
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Delete book based on id from mongoDB
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save book into mongoDB
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};