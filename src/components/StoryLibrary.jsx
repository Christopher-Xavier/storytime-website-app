import React, { useState } from "react";
import Confetti from "react-confetti";

function StoryLibrary() {
  const books = [
    { id: 1, title: "The Enchanted Forest" },
    { id: 2, title: "The Lost Treasure" },
    { id: 3, title: "Rainbow Wishes" },
  ];

  const [showConfetti, setShowConfetti] = useState(false);

  const handleClick = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000); // Hide confetti after 2s
  };

  return (
    <div>
      {showConfetti && <Confetti />}
      <h2>📚 Story Library</h2>
      {books.map((book) => (
        <div key={book.id} style={styles.book} onClick={handleClick}>
          <h3>{book.title}</h3>
        </div>
      ))}
    </div>
  );
}

const styles = {
  book: {
    cursor: "pointer",
    padding: "10px",
    border: "2px solid #FFD700",
    margin: "10px",
    transition: "transform 0.2s",
  },
  bookHover: {
    transform: "scale(1.05)",
  },
};

export default StoryLibrary;

