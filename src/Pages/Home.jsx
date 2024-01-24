import { useEffect, useState } from "react";
import Editor_pick from "../components/Editor_pick/Editor_pick";
import Footer from "../components/Footer/Footer";
import Most_viewed from "../components/Most_viewed_banner/Most_viewed";
import Popular_topics from "../components/Popular_topics/Popular_topics";
import Slider_navbar from "../components/Slider_navbar/Slider_navbar";
import Navbar from "../components/navbar/Navbar";
import "./Home.css"
import axios from "axios";
import Header from "../components/Header/Header";


export default function Home() {

  const API =
  'http://139.59.24.180:3001/api/topics?sort=topic_rating:desc&pagination[pageSize]=8&populate[0]=categories&populate[1]=Topic_image&populate[2]=author&populate[3]=author.author_image';

  const [myData, setMyData] = useState([]);
  console.log(myData,'myData home before test commit');

  const getApidata = async (url) => {
    try {
      const response = await axios.get(url);
      setMyData(response?.data?.data);
  console.log(myData,'myData home after test commit');

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApidata(API);
  }, []);
  return (
    <>
    <div className="Navbar-home"> 
     <div className="header-nav"><Header/></div>
     <div className="slider-nav"><Slider_navbar/></div>
    </div>
    <Popular_topics/>
    <Most_viewed/>
    <Editor_pick/>
    <Footer/>

    </>
  )
}
