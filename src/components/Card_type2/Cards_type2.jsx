// Cards_type2.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./Cards_type2.css";
import Card_type2 from "./Card_type2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SamplePrevArrow } from "../arrows/amplePrevArrow";
import { SampleNextArrow } from "../arrows/SampleNextArrow";

const CardData2=[
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  {
    title:"Richird Norton photorealistic rendering as real photos",
    category:"Fashion",
    date:"10-10-2003",
    content:" Progressively incentivize cooperative systems through technically sound functionalities.The credibly productivate seamless data."
  },
  
]

export default function Cards_type2() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,

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

  return (
    <div className="cards2-container">
      <Slider {...settings}>
        {CardData2.map((card, index) => (
          <Link to="/single-article" key={index}>
            <Card_type2
              title={card.title}
              category={card.category}
              date={card.date}
              content={card.content}
            />
          </Link>
        ))}
      </Slider>
    </div>
  );
}
