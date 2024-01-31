
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import Card from "./Card";

const API = 'https://runo1.onrender.com/popular-topic';

export default function Cards({ selectedCategory }) {
  const [myData, setMyData] = useState([]);

  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setMyData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApidata(API);
  }, []);

  const filteredData = selectedCategory === "all"
    ? myData
    : myData.filter(card =>
        card.categories.some(cat => cat.title.toLowerCase() === selectedCategory.toLowerCase())
      );

  const [showAllCards, setShowAllCards] = useState(false);

  const toggleCardDisplay = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div>
      <div className="cards-container">
        {filteredData
          .slice(0, showAllCards ? filteredData.length : 4)
          .map((card, index) => (
            <Card
              id={card.id}
              key={index}
              image={card.headerimage}
              title={card.title}
              category1={card.categories[0].title.toUpperCase()}
              category2={card.categories[1].title.toUpperCase()}
              category3={
              card.categories[2] ? card.categories[2].title.toUpperCase() : null
              }
              date={card.date}
              content={card.description}
            />
          ))}
      </div>

      <div className="btn-container">
        {showAllCards ? (
          <button className="btn-load-less" onClick={toggleCardDisplay}>
            Load Less
          </button>
        ) : (
          <button className="btn-load-more" onClick={toggleCardDisplay}>
            Load More
          </button>
        )}
      </div>
    </div>
  );
}
