import React, { useState, createContext } from 'react'
import uuid from 'uuid/v1';
export const BooksContext =  createContext();


function BooksContextProvider(props) {
  const [books, setBooks] = useState([
    {title: 'Name of the wind', author:"Patrick Rothfuss" ,id: 1},
    {title: 'The way of kings', author:"Brandon Sanderson" ,id: 2},
    {title: 'The final empire', author:"Brandon Sanderson" ,id: 3},
    {title: 'The hero of ages', author:"Brandon Sanderson" ,id: 4}
  ]);

 const  addBook = (title, author) => {
  setBooks([...books, {title, author, id:uuid()}])
 }

  const removeBook = (id) => {
  setBooks(books.filter(book => book.id !== id))
}

  const { Provider } = BooksContext
  return (
    <Provider value={{books, addBook, removeBook}}>
      {props.children}
    </Provider>
  )
}

export default BooksContextProvider
