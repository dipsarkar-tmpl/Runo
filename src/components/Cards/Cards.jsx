import React, { useState } from "react";
import "./Cards.css";
import Card from "./Card";

export default function Cards() {
  const [showAllCards, setShowAllCards] = useState(false);

  const toggleCardDisplay = () => {
    setShowAllCards(!showAllCards);
  };

  return (
    <div className="cards-container">
      {showAllCards ? (
        <>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </>
      ) : (
        <>
          <Card />
          <Card />
          <Card />
          <Card />
        </>
      )}

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
