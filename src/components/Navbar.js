import React, { useContext } from 'react'
import {BooksContext} from '../context/BooksContext';
function Navbar() {
  const { books } = useContext(BooksContext);
  
  return (
    <div className="navbar">
      <h1>Reading List</h1>
      <p>Currently you have { books.length} books to get through...</p>
    </div>
  )
}

export default Navbar
