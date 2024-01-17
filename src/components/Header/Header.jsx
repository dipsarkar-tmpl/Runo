import React, { useState } from "react";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa"; // Using FaTimes for close icon
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="left">
          RUNO
        </div>
        <div className="right">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes style={{ color: "white" }} /> : <FaBars style={{ color: "white" }} />}
          </div>
          <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
            <li className="nav-item"><a href="/">Home</a></li>
            <li className="nav-item"><a href="/">About</a></li>
            <li className="nav-item"><Link to="/Articles">Articles</Link></li>
            <li className="nav-item"><a href="#footer">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
