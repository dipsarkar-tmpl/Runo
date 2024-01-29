// Navbar2.jsx
import React from "react";
import "./Navbar2.css";


export default function Navbar2({title,category,date,short,image}) {
  return (
    <div>
      <div className="nav-container">
        <img src={image} alt="Navigation" className="nav-image" />
        <div className="f-blog">
          <div className="nav-cat">
            <p className="nav-c">{category}</p>
          </div>
          <div className="nav-title">
            <h1 className="nav-t">
            {title}
            </h1>
          </div>
          <div className="nav-info">
            <span className="nav-date">{date}</span>
            <hr className="nav-hr" />
            <span className="nav-d">
             {short}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
