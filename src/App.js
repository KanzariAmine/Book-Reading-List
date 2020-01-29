import React from 'react';
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm'
function App() {
  return (
    <div className="App">
    <BooksContextProvider>
      <Navbar/>
      <BookList/>
      <NewBookForm/>
    </BooksContextProvider>
    </div>
  );
}

export default App;
