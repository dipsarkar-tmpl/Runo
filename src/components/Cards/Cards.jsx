import "./Cards.css"
import Card from "./Card"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SamplePrevArrow } from "../arrows/amplePrevArrow";
import { SampleNextArrow } from "../arrows/SampleNextArrow";
export default function Cards() {
  const  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 4,
    rows:2,
    initialSlide: 0,
   
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
     
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows:1,
          dots:false, 
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows:1,
          dots:false,
          
        }
      }
    ]
  };
  return (
   
   <div className="cards-container">
    <Slider {...settings}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    
    </Slider>
    
   </div>
   
   
  )
}
