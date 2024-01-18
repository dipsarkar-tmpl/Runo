import Editor_pick from "../components/Editor_pick/Editor_pick";
import Footer from "../components/Footer/Footer";
import Most_viewed from "../components/Most_viewed_banner/Most_viewed";
import Popular_topics from "../components/Popular_topics/Popular_topics";
import Slider_navbar from "../components/Slider_navbar/Slider_navbar";
import Navbar from "../components/navbar/Navbar";
import "./Home.css"


export default function Home() {
  return (
    <>
    <Slider_navbar/>
    <Popular_topics/>
    <Most_viewed/>
    <Editor_pick/>
    <Footer/>

    </>
  )
}
