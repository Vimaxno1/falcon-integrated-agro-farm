"use client"
import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Falcon Farms</div>
 
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button
        className="navbar-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        {menuOpen ? "✖" : "☰"}
      </button>
    </nav>
  );
};

export default Navbar;

