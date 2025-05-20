import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage"; // Import Home Page
import StoryLibrary from "./components/StoryLibrary";
import LiveBooks from "./components/LiveBooks";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div>
      <Navbar />
      <section id="home">
        <HomePage />
      </section>
      <section id="books">
        <h2>📚 Story Library</h2>
        {books.map((book) => (
          <p key={book.id}>{book.title}</p>
        ))}
        <StoryLibrary />
        <LiveBooks />
      </section>
    </div>
  );
}

export default App;
