// Cards.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Cards.css";
import Card from "./Card";
import imageUrl from "../../images/Blog Image.png"

const API =
  'http://139.59.24.180:3001/api/topics?sort=topic_rating:desc&pagination[pageSize]=8&populate[0]=categories&populate[1]=Topic_image&populate[2]=author&populate[3]=author.author_image';

export default function Cards() {
  const [showAllCards, setShowAllCards] = useState(false);
  const [myData, setMyData] = useState([]);
  console.log(myData,'myData before test commit');

  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setMyData(response?.data?.data);
  console.log(myData,'myData after test commit');

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApidata(API);
  }, []);

  const toggleCardDisplay = () => {
    setShowAllCards(!showAllCards);
  };


  return (
    <div className="cards-container">
      <div>Test</div>
      {myData.slice(0, showAllCards ? myData.length : 4).map((card, index) => (
          <Card
          key={index}
            image={imageUrl}
            title={card.attributes.topic_shortDesc.split("\n")[0].slice(2)}   
            category={card.attributes.categories.data[0].attributes.category_topic}
            date={card.attributes.Topic_date}
            content={card.attributes.Topic_longdesc.slice(0,173)}
          />
      ))}

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
