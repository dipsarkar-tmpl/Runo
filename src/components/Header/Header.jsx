import { FaFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import React, { useState } from "react";
import "./Header.css";
import { FaTimes, FaBars } from "react-icons/fa"; // Using FaTimes for close icon

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
            <li className="nav-item Home"><a href="/">Home</a></li>
            <li className="nav-item About"><a href="/">About</a></li>
            <li className="nav-item Articles"><a href="/">Articles</a></li>
            <li className="nav-item contact"><a href="/">Contact Us</a></li>
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
