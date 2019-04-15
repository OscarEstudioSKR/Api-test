const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

/* GET books' list */
router.get('/', (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((error) => {
      next(error);
    })
});

router.get('/:bookId', (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findOne({ _id: bookId })
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((error) => {
      next(error);
    })
});

router.post('/', (req, res, next) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author
  });

  // book.save((error, newBook) => {
  //   if (error) {
  //     next(error);
  //     return;
  //   }

  //   res.status(201).json(newBook);
  // });

  Book.create(newBook)
    .then((savedBook) => {
      res.status(201).json(savedBook);
    })
    .catch((error) => {
      next(error);
    })
});

module.exports = router;