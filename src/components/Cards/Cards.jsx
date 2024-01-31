import React, { useState,useEffect } from "react";
import axios from "axios";
import "./Cards.css";

//import { productData } from "../../utils/popularTopicData";
import Card from "./Card";
/*import p1 from "../../images/p1.jpg";
import p2 from "../../images/p2.jpg";
import p3 from "../../images/p3.jpg";
import p4 from "../../images/p4.jpg";
import p5 from "../../images/p5.jpg";
import p6 from "../../images/p6.jpg";
import p7 from "../../images/p7.jpg";
import p8 from "../../images/p8.jpg";
const imgData = [
  { img: p1,
    title: "Dream destinations to visit this year in Paris" },
  { img: p2,
    title: "Breathtaking first-person photos around Europe" },
  { img: p3,
    title: "What collectors need to know about authenticity" },
  { img: p4,
    title: "Instagram artists with great photography skills" },
  { img: p5,
    title: "Dream destinations to visit this year in Paris" },
  { img: p6,
    title: "Breathtaking first-person photos around Europe" },
  { img: p7,
    title: "What collectors need to know about authenticity" },
  { img: p8,
    title: "Instagram artists with great photography skills" },
];  */


const API = 'https://runo1.onrender.com/popular-topic';

export default function Cards() {
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
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleCardDisplay = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    
    <div>
      <div className="cards-container">
        {myData
          .slice(0, showAllCards ? myData.length : 4)
          .map((card, index) => (
            <Card
              key={index}
              image={card.headerimage}
              title={card.title}
              category={
                card.categories[0].title.toUpperCase()
              }
              date={card.date}
              content={card.description
                }
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
