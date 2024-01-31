import "./Card_type2.css";
import { Link } from "react-router-dom";

export default function Card_type2({category,date,title,content,image,id}) {
  return (
    <Link to={`/single-article/${id}`} >
    <div className="card2-container">
      <div className="card2-cat">
          <p>{category}</p>
        </div>
      <div className="main-content">
        
        <div className="card2-date">
          <p>{date}</p>
        </div>
        <div className="card2-title">
          <h2>{title}</h2>
        </div>
        <div className="card2-des">
          <p>{content}</p>
        </div>
      </div>
      <img
        src={image} 
        alt="Card Image"
        className="card2-image"
      />
    </div>
    </Link>
  );
}
