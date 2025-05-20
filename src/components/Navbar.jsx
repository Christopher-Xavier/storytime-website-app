import React from "react";
function smoothScroll(target) {
  document.querySelector(target).scrollIntoView({ behavior: "smooth" });
}

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li><a href="#home" onClick={() => smoothScroll("#home")}>Home</a></li>
        <li><a href="#books" onClick={() => smoothScroll("#books")}>Books</a></li>
        <li><a href="#about" onClick={() => smoothScroll("#about")}>About</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navList: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
  },
  navItem: {
    transition: "transform 0.3s ease-in-out",
  },
  navItemHover: {
    transform: "scale(1.1)",
    color: "#FFD700", // Change color on hover
  }
};



export default Navbar;
