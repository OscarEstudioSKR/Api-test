const express = require('express');
const Book = require('../models/Book');
const router = express.Router();


/* GET books' list */
router.get('/', (req, res, next) => {
  // Fake db
  const books = [
    {
      title: 'Harry Potter',
      author: 'JK Rowling'
    },
    {
      title: 'El Quijote',
      author: 'Cervantes'
    }
  ];

  res.json(books);
});


router.post('/', (req, res, next) => {
  const book = new Book({
    title: req.body.title,
    author: req.body.author
  });

  book.save((error, newBook) => {
    if (error) {
      next(error);
      return;
    }

    res.status(201).json(newBook);
  });
});

module.exports = router;