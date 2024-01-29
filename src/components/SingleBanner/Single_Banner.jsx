// Single_Banner.jsx
import React from "react";
import Header from "../Header/Header";
import "./Single_Banner.css";
import image from "../../images/Image (1).jpg";
const SingleData=[{
  image:image,
  title:"Richird Norton photorealistic rendering as real photos",
  category:"FASHION",
  auth_name:"By Jennifer Lawrence",
  short:"Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data."
}]

export default function Single_Banner() {
  return (
    <>
      <div className="Single-banner-container">
        <img src={SingleData[0].image} alt="Banner" className="banner-image" />
        <Header />
        <div className="banner-content">
          <div className="banner-cat">
            <p className="ban-c">{SingleData[0].category}</p>
          </div>
          <div className="banner-title">
            <h1 className="ban-t">
              {SingleData[0].title}
            </h1>
          </div>
          <div className="ban-info">
            <p className="ban-i">
              {SingleData[0].short}
            </p>
          </div>
          <div className="ban-auth">
            <p className="ban-auth-name">{SingleData[0].auth_name}</p>
          </div>
        </div>
      </div>
    </>
  );
}
