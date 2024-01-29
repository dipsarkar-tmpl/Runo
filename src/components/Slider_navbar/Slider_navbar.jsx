import Navbar from "../navbar/Navbar";
import "./Slider_navbar.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SamplePrevArrow } from "../arrows/SamplePrevArrow";
import { SampleNextArrow } from "../arrows/SampleNextArrow";
import Navbar2 from "../navbar/Navbar2";
import bannerImg from "../../images/nav.png";
import bannerImg22 from "../../images/banner2.jpg";
import bannerImg33 from "../../images/banner3.png";
const bannerData = [
  {
    title: "Richird Norton photorealistic rendering as real photos",
    img: bannerImg,
    date: "10-10-2003",
    short:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    category: "ADVENTURE",
  },
  {
    title: "Richird Norton photorealistic rendering as real photos",
    img: bannerImg22,
    date: "12-10-2003",
    short:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    category: "ADVENTURE",
  },
  {
    title: "Richird Norton photorealistic rendering as real photos",
    img: bannerImg33,
    date: "11-10-2003",
    short:
      "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.",
    category: "ADVENTURE",
  },
];

export default function Slider_navbar() {
  const settings = {
    dots: true,
    infinite: true,

    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 4000,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
        },
      },

      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        {bannerData.map((banner, index) => (
          <Navbar2
            key={index}
            image={banner.img}
            title={banner.title}
            date={banner.date}
            short={banner.short}
            category={banner.category}
          />
        ))}
      </Slider>
    </div>
  );
}
