// Cards_type2.jsx


import { Link } from "react-router-dom";
import "./Cards_type2.css";
import Card_type2 from "./Card_type2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SamplePrevArrow } from "../arrows/SamplePrevArrow";
import { SampleNextArrow } from "../arrows/SampleNextArrow";
import React, { useState,useEffect } from "react";
import axios from "axios";
/*const CardData2=[
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg2
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg3
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg2
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg3
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg2
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg3
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg
  },  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg2
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data.",
    img:cardImg3
  },
  
]*/
const API = 'https://runo1.onrender.com/topic';

export default function Cards_type2() {
  const settings = {
    dots: true,
    infinite: true,
   
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  const [cardData, setcardData] = useState([]);
  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setcardData(response.data);
      console.log(cardData);

    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getApidata(API);
  }, []);

  return (
    <div className="cards2-container">
      <Slider {...settings}>
        {cardData.map((card2, index) => (
          
            <Card_type2
              id = {card2.id}
              key={index}
              title={card2.title}
              category={card2.categories[0].title.toUpperCase()}
              date={card2.updatedAt.split("T")[0]}
              content={card2.description}
              image={card2.headerimage}
            />
          
        ))}
      </Slider>
    </div>
  );
}
