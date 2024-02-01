// Single_Banner.jsx
import React from "react";
import Header from "../Header/Header";
import "./Single_Banner.css";



export default function Single_Banner({title,auth_name,info,category,image}) {
  return (
    <>
      <div className="Single-banner-container">
        <img src={image} alt="Banner" className="banner-image" />
        <Header />
        <div className="banner-content">
          <div className="banner-cat">
            <p className="ban-c">{category}</p>
          </div>
          <div className="banner-title">
            <h1 className="ban-t">
              {title}
            </h1>
          </div>
          <div className="ban-info">
            <p className="ban-i">
              {info}...
            </p>
          </div>
          <div className="ban-auth">
            <p className="ban-auth-name">{auth_name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
