import Card_type2 from "./Card_type2";
import "./Cards_type2.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SamplePrevArrow } from "../arrows/amplePrevArrow";
import { SampleNextArrow } from "../arrows/SampleNextArrow";


export default function Cards_type2() {
  
  const  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4 ,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
          dots:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ]
  };
  return (
  
   <div className="cards2-container">
    

    <Slider {...settings}>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    <Card_type2/>
    </Slider>
   
   </div>
   
   
   
   
  
  )
}
