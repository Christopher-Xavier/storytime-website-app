import React from "react";

function HomePage() {
  return (
    <div style={styles.container}>
      <h1>✨ Welcome to the Magical World of Stories! ✨</h1>
      <p>📖 Dive into whimsical adventures and bring stories to life!</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px",
    backgroundColor: "#F8E1A1",
  },
};

export default HomePage;
