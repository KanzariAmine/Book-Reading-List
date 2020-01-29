import React from 'react';
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar';
import BookList from './components/BookList';
function App() {
  return (
    <div className="App">
    <BooksContextProvider>
      <Navbar/>
      <BookList/>
    </BooksContextProvider>
    </div>
  );
}

export default App;
