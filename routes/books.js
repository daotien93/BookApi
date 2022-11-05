const express = require('express');
const router = express.Router();
const books = require('../books.json');

// Get all books
router.get('/', (req, res) => {
    res.json(books);
})

// Get book by id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json(books.filter((book) => book.id === parseInt(id)));
})

// Create
router.post('/create', (req, res) => {
    const body = req.body;
    books.push(body);
    res.json({ message: 'The book has been added' });
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    books.map((book, index) => {
        if (book.id === parseInt(id)) {
            books.splice(index);
        }
    });
    res.json({ message : `The books has been deleted ${id}`});
})

// Put a book
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    books.map((book, index) => {
        if (book.id === parseInt(id)) {
            books[index] = body;
        }
    });
    res.json({ message: `The book has update at ${id}`})
})


module.exports = router;