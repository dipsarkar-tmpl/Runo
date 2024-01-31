import Cards from "../Cards/Cards";
import "./Popular_topics.css";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BASE_API = 'https://runo1.onrender.com/category/';

export default function Popular_topics() {
  const [popularTopic, setPopularTopic] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setPopularTopic(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const categoryAPI = selectedCategory === 'all' ? 'all' : selectedCategory;
    getApidata(BASE_API + categoryAPI);
  }, [selectedCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="topic-container">
        <div className="topic-title">
          <h2>Popular topics</h2>
        </div>
        <div className="topic-cat">
          <div className="left-cat">
            <ul className="left-cat-items">
              <li className="left-cat-item item1">
                <Link to="/" onClick={() => handleCategoryClick('all')}>All</Link>
              </li>
              <li className="left-cat-item">
                <Link to="/" onClick={() => handleCategoryClick('adventure')}>Adventure</Link>
              </li>
              <li className="left-cat-item">
                <Link to="/" onClick={() => handleCategoryClick('travel')}>Travel</Link>
              </li>
              
              <li className="left-cat-item">
                <Link to="/" onClick={() => handleCategoryClick('fashion')}>Fashion</Link>
              </li> 
              <li className="left-cat-item">
                <Link to="/" onClick={() => handleCategoryClick('technology')}>Technology</Link>
              </li>
              <li className="left-cat-item">
                <Link to="/" onClick={() => handleCategoryClick('branding')}>Branding</Link>
              </li>  
            </ul>
          </div>
          <div className="right-cat">
            <Link to="/" onClick={() => handleCategoryClick('all')}>View All</Link>
          </div>
        </div>
        <div className="topic-cards">
          <Cards  selectedCategory={selectedCategory} />
        </div>
      </div>
    </>
  );
}
