import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Most_viewed from "./components/Most_viewed_banner/Most_viewed";

import Cards from "./components/Cards/Cards";
import Popular_topics from "./components/Popular_topics/Popular_topics";

import Editor_pick from "./components/Editor_pick/Editor_pick";

import Single_post from "./components/Single_post/Single_post";
import Post_info from "./components/Post_info/Post_info";
import Related from "./components/Related_posts/Related";
import Home from "./Pages/Home";
import SingleArticle from "./Pages/SingleArticle";

import { BrowserRouter , Switch, Route, Link,Routes } from "react-router-dom";
function App() {
  return (
    
    <BrowserRouter>
    <Routes>
        
          <Route path="/Articles"
           element ={<SingleArticle/>} />
          <Route path="/"
           element ={<Home/>} />

        
      </Routes>
    </BrowserRouter>

      
    
  );
}

export default App;
