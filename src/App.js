import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Most_viewed from "./components/Most_viewed_banner/Most_viewed";

import Cards from "./components/Cards/Cards";
import Popular_topics from "./components/Popular_topics/Popular_topics";

import Editor_pick from "./components/Editor_pick/Editor_pick";

function App() {
  return (
    <>
      <Navbar />
      <Popular_topics style={{"margin-top":"35%"}} />
      <Most_viewed />
      <Editor_pick />
      <Footer />
    </>
  );
}

export default App;
