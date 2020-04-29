const express = require("express");
const Book = require('../model/bookmodel');
const bookRoute = express.Router();

bookRoute.route('/books')
    .get((req, res) => {
        Book.find((err, books) => {

            return res.json(books);
        });   
       
    });

bookRoute.route('/books')
    .post((req, res) => {
        
        const book = new Book (req.body);
        book.save()

        return res.json(book);
       
    });



module.exports = bookRoute;