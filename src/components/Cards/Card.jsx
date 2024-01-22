import "./Card.css";
import { Link } from "react-router-dom";



export default function Card({ category, date, content, title, image }) {
  return (
    <Link to="/single-article" >
    <div className="card-container"><div>Test from card</div>
      <div className="img-container">
        <img src={image} alt="Card" />
        <div className="cat-container">
          <p>{category}</p>
        </div>
      </div>
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
    </Link>

  );
}
