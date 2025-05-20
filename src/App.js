import React, {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";

import StoryLibrary from './components/StoryLibrary';
import LiveBooks from './components/LiveBooks';
// Removed invalid top-level useState and useEffect
// import { useState, useEffect } from "react";


function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <h1>📚 Reading Adventure</h1>
      {books.map(book => (
        <p key={book.id}>{book.title}</p>
      ))}
    </div>
  );
}

export default App;
