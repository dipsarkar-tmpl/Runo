// Cards.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import Card from "./Card";

export default function Cards() {
  const [showAllCards, setShowAllCards] = useState(false);

  const CardData = [
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    {
      title: "Dream destinations to visit this year in Paris",
      category: "Adventure",
      date: "10-10-2001",
      content:
        "Progressively incentivize cooperative systems through technically sound functionalities. Credibly productivate seamless data with flexible schemas."
    },
    
  ];

  const toggleCardDisplay = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="cards-container">
      {CardData.slice(0, showAllCards ? CardData.length : 4).map((card, index) => (
        <Link to="/single-article" key={index}>
          <Card
            title={card.title}
            category={card.category}
            date={card.date}
            content={card.content}
          />
        </Link>
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
