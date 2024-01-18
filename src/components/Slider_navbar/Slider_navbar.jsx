import Navbar from "../navbar/Navbar"
import "./Slider_navbar.css"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Slider_navbar() {
    const  settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1 ,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
         
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
              dots:true
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:true
            }
          }
        ]
      };
  return (
    <div className="slider">
    <Slider {...settings}>
      <Navbar/>
      <Navbar/>
      <Navbar/>
    </Slider>
    </div>
  )
}
