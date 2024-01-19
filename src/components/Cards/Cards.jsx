// Cards.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
        </>
      ) : (
        <>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
          <Link to="/single-article"><Card /></Link>
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
