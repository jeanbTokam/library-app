import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

import Table from './components/Table';
import Form from './components/Form';

function App() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [currentBookId, setCurrentBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookId: uuidv4(),
      bookTitle: "Book1",
      bookAuthor: "Jean Baptiste",
      bookIsbn: "777",
    },
  ]);

  const isInputInvalid = () => {
    return title.trim() === '' || author.trim() === '' || isbn.trim() === '';
  };

  const clearInputs = () => {
    setTitle('');
    setAuthor('');
    setIsbn('');
  };

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookId: uuidv4(),
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: isbn,
      },
    ]);
    clearInputs();
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currentBookId
          ? { ...book, bookTitle: title, bookAuthor: author, bookIsbn: isbn }
          : book
      )
    );
    clearInputs();
    setCurrentBookId(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputInvalid()) {
      return;
    }
    currentBookId ? updateBook() : addBook();
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrentBookId(book.bookId);
  };

  const cancelEdit = () => {
    clearInputs();
    setCurrentBookId(null);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
    setCurrentBookId(null);
    clearInputs();
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          handleSubmit={handleSubmit}
          title={title}
          author={author}
          isbn={isbn}
          setTitle={setTitle}
          setAuthor={setAuthor}
          setIsbn={setIsbn}
          currentBookId={currentBookId}
          setCurrentBookId={setCurrentBookId}
        />
        <Table
          books={books}
          setCurrentBookId={setCurrentBookId}
          removeBook={removeBook}
          editBook={editBook}
        />
      </div>
    </div>
  );
}

export default App;