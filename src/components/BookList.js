import React, { useContext } from 'react'
import {BooksContext} from '../context/BooksContext';
import BookDetails from './BookDetails';
function BookList() {
  const { books } = useContext(BooksContext)
  
  return books.length ? (
    <div className="book__list">
      <ul>
        {
          books.map(book => {
            return(<BookDetails book={book} key={book.id}/>)
          })
        }
      </ul>
    </div>
  ):(
    <div className="empty">No bookd to read. Hello free time :)</div>
  )
}

export default BookList
