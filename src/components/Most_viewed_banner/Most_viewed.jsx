import "./Most_viewed.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import mostImg from "../../images/most_viewed.png"
const API = 'https://runo1.onrender.com/popular-topic';

export default function Most_viewed() {
  const [mostData, setmostData] = useState([]);

  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setmostData(response.data);
      console.log(mostData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApidata(API);
  }, []);

  return (
    <>
      <div className="most_viewed-container">
        <img
          src={mostImg}
          alt="Most Viewed"
          className="background-image"
        />
        <div className="content">
          <div className="category">
            <p className="cat-content">{mostData[0]?.categories[1]?.title?.toUpperCase()}</p>
          </div>
          <div className="title">
            <h1 className="title-content">{mostData[3]?.title}</h1>
          </div>
          <div className="des">
            <p className="des-content">Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
          </div>
          <hr className="most-viewed-hr" />
          <div className="date">
            <p className="date-content">08.08.2021</p>
          </div>
        </div>
      </div>
    </>
  );
}
