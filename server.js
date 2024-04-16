const express = require('express');
const app = express();

let books = [
  { id: 'b1', title: 'Book One', description: 'Description of book one', authorId: 'a1' },
  { id: 'b2', title: 'Book Two', description: 'Description of book two', authorId: 'a2' },
];

let reviews = [
  { id: 'r1', text: 'Amazing book!', bookId: 'b1' },
  { id: 'r2', text: 'Decent read.', bookId: 'b2' },
];

let authors = [
  { id: 'a1', name: 'Author One', bio: 'Bio of Author One' },
  { id: 'a2', name: 'Author Two', bio: 'Bio of Author Two' },
];

// Your routing and controller code goes here

app.get("/books/:id", (request, response) => {
    const selectedBook = books.find(book => book.id === request.params.id);
    const author = authors.find(author => author.id === selectedBook.authorId);
    const result = { ...selectedBook, name: author.name, bio: author.bio };
    response.json(result);
});

app.get("/reviews/:id", (request, response) => {
    const selectedReview = reviews.find(review => review.id === request.params.id);
    const book = books.find(book => book.id === selectedReview.bookId);
    const result = { ...selectedReview, book_title: book.title };
    response.json(result);
});


app.listen(5000, () => {
  console.log('Bookstore app is running on port 5000');
});



