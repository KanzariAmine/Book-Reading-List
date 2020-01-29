import React, { useReducer, useEffect, createContext } from 'react'
import {bookReducer} from '../reducers/bookReducer';



export const BooksContext =  createContext();

function BooksContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('books');
    return localData && JSON.parse(localData)
  });
  const { Provider } = BooksContext;

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  },[books])
  return (
    <Provider value={{books, dispatch}}>
      {props.children}
    </Provider>
  )
}

export default BooksContextProvider
