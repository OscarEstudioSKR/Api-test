const express = require('express');
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

module.exports = router;