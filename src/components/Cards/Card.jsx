import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ category1,category2,category3, date, content, title, image }) {
  return (
    <Link to="/single-article">
      <div className="card-container">
        <div className="img-container">
          <img src={image} alt="Card" />
          <div className="both-cat-container">
          <div className="cat-container">
            <p>{category1}</p>
          </div>
          <div className="cat-container1">
            <p>{category2}</p> 
          </div>
          { category3 &&
          <div className="cat-container2">
            <p>{category3}</p> 
          </div>
          }
          </div>
        </div>
        <div className="card-content-popular">
          <div className="date-container">
            <p>{date}</p>
          </div>
          <div className="title-container">
            <h2>{title}</h2>
          </div>
          <div className="des-container">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
