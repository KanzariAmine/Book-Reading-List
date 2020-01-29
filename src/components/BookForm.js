import React, { useContext, useState } from 'react';
import { BooksContext } from '../context/BooksContext';

function BookForm() {
  const {addBook} = useContext(BooksContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addBook(title, author);
    setTitle('');
    setAuthor('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder="Book Title..." onChange={e => setTitle(e.target.value)} value={title} required/>
      <input type='text' placeholder="Book Author..." onChange={e => setAuthor(e.target.value)} value={author} required/>
      <input type='submit' value='Submit Book'/>
    </form>
  )
}

export default BookForm
