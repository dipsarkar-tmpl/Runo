// Header.jsx
import React, { useState, useEffect } from "react";
import "./Header.css";
import axios from "axios";
import { FaFacebook, FaLeftLong } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { Params } from "react-router-dom";

export default function Header() {
  const{id}= useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const handleNavItemClick = (index) => {
    setActiveNavItem(index);
  };

  const handleSearchInputChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  useEffect(() => {
    if (searchKeyword !== "") {
      axios.get(`https://runo1.onrender.com/${searchKeyword}`)
        .then((response) => {
          console.log(response, response.data, "here")
          setSearchResults(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      setSearchResults([]);
    }
  }, [searchKeyword]);

  console.log(searchKeyword)

  return (
    <>
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="left">
          <h2><a href="/">RUNO</a></h2>
        </div>
        <div className="right">
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes style={{ color: "white" }} /> : <FaBars style={{ color: "white" }} />}
          </div>
          <ul className={`nav-items ${menuOpen ? "open" : ""}`}>
            <li onClick={() => handleNavItemClick(0)} className={`nav-item Home ${activeNavItem === 0 ? "active" : ""}`}><Link to="/">Home</Link></li>
            <li onClick={() => handleNavItemClick(1)} className={`nav-item About ${activeNavItem === 1 ? "active" : ""}`}><Link to="#">About</Link></li>
            <li onClick={() => handleNavItemClick(2)} className={`nav-item Articles ${activeNavItem === 2 ? "active" : ""}`}><Link to="#">Articles</Link></li>
            <li onClick={() => handleNavItemClick(3)} className={`nav-item contact ${activeNavItem === 3 ? "active" : ""}`}><Link to="#">Contact Us</Link></li>
            <li className="nav-item border"></li>
            <li className="nav-item icons facebook"><a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaFacebook /></a></li>
            <li className="nav-item icons"><a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaSquareTwitter /></a></li>
            <li className="nav-item icons"><a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaYoutube /></a></li>
            <li className="nav-item icons"><a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaPinterest /></a></li>
            <li className="nav-item icons"><a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaInstagram /></a></li>
            <li className="nav-item border"></li>
            <li className="nav-item icons search" onClick={toggleSearch}><IoSearchOutline /></li>
          </ul>
        </div>
      </nav>

      {searchOpen && (
        <div className="search-container">
          <input
          className="search-container-input"
            placeholder="Search content..."
            value={searchKeyword}
            onChange={handleSearchInputChange}
          />
          {searchResults.length > 0 ?<div className="result"> (
            <ul className="search-results">
              {searchResults.map((result) => (
                <li key={result?.id}>
                  <Link to={`/single-article/${result?.id}`}>
                    <h3>{result.title}</h3>
                  </Link>
                  <p>{result.body}</p>
                </li>
              ))}
            </ul>
          )</div> : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </>
  );
}
