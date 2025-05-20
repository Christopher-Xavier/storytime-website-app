import React from "react";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <img src="/logo.png" alt="Storytime Logo" style={styles.logo} />
      <ul style={styles.navList}>
        <li><a href="#home">Home</a></li>
        <li><a href="#books">Books</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#4A90E2",
    padding: "10px",
  },
  logo: {
    height: "50px",
    marginRight: "20px",
  },
};

export default Navbar;




