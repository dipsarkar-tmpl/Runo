
import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="left">
          <h2><a href="/">RUNO</a></h2>
        </div>
        <div className="right">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes style={{ color: "white", display:"flex",justifyContent:"end" }} /> : <FaBars style={{ color: "white" }} />}
          </div>
          <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
            <li onClick={() => handleNavItemClick(0)} className={`nav-item Home ${activeNavItem === 0 ? "active" : ""}`}><Link to="/">Home</Link></li>
            <li onClick={() => handleNavItemClick(1)} className={`nav-item About ${activeNavItem === 1 ? "active" : ""}`}><Link to="/">About</Link></li>
            <li onClick={() => handleNavItemClick(2)} className={`nav-item Articles ${activeNavItem === 2 ? "active" : ""}`}><Link to="/Articles">Articles</Link></li>
            <li onClick={() => handleNavItemClick(3)} className={`nav-item contact ${activeNavItem === 3 ? "active" : ""}`}><Link to="/">Contact Us</Link></li>
            <li className="nav-item border"></li>
            <li className="nav-item icons facebook" ><FaFacebook /></li>
            <li className="nav-item icons" ><FaSquareTwitter /></li>
            <li className="nav-item icons" ><FaYoutube /></li>
            <li className="nav-item icons" ><FaPinterest /></li>
            <li className="nav-item icons" ><FaInstagram /></li>
            <li className="nav-item border"></li>
            <li className="nav-item icons search" ><IoSearchOutline /></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
