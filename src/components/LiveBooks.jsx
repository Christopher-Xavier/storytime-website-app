import { useEffect, useState } from "react";

function LiveBooks() {
  const [books, setBooks] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8000/ws");
    setSocket(ws);

    ws.onmessage = (event) => {
      setBooks(JSON.parse(event.data));
    };

    return () => {
      ws.close();
    };
  }, []);

  const addBook = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send("A New Adventure");
    }
  };

  return (
    <div>
      <h2>📖 Live Bookshelf</h2>
      <button onClick={addBook}>Add New Book</button>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default LiveBooks;
