const axios = require("axios");
const db = require("../models");

//Methods for search

//Searches the API & returns any UNSAVED books
let searchControl = {
    findAll: function(req,res){
        const{query: params} = req;
        axios.get("https://googleapis.com/books/v1/volumes", {
            params
        }).then(
            results => results.data.items.filter(
                result=>
                    result.volumeInfo.title &&
                    result.volumeInfo.infoLink &&
                    result.volumeInfo.authors &&
                    result.volumeInfo.description &&
                    result.volumeInfo.imageLinks &&
                    result.volumeInfo.imageLinks.thumbnail
            ) //Returned books contain: title,author, link, description, image, & thumbnail
        ).then(apiBooks => db.Book.find().then(
            dbBooks => apiBooks.filter(apiBook =>
                dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id))
            )
        ).then(books => res.json(books)
        ).catch(err => res.status(404).json(err));
    }
}

module.exports = searchControl;