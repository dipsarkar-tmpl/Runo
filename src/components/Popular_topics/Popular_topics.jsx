import Cards from "../Cards/Cards"
import "./Popular_topics.css"


export default function Popular_topics() {
  return (
    <>
    <div className="topic-container">
        <div className="topic-title">
            <h2>Popular topics</h2>
        </div>
        <div className="topic-cat">
            <div className="left-cat">
                <ul className="left-cat-items">
                    <li className="left-cat-item item1"><a href="/">All</a></li>
                    <li className="left-cat-item"><a href="/">Adventure</a></li>
                    <li className="left-cat-item"><a href="/">Travel</a></li>
                    <li className="left-cat-item"><a href="/">Fashion</a></li>
                    <li className="left-cat-item"><a href="/">Technology</a></li>
                    <li className="left-cat-item"><a href="/">Branding</a></li>
                </ul>
            </div>
            <div className="right-cat">
                <a href="/">View All</a>
            </div>
        </div>
        <div className="topic-cards">
            <Cards/>
        </div>
    </div>
    </>
  )
}
