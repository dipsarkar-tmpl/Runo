import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({
  category1,
  category2,
  category3,
  date,
  content,
  title,
  image,
  id,
}) {
  return (
    <Link to={`/single-article/${id}`}>
      <div className="card-container">
        <div className="img-container">
          <img src={image} alt="Card" />
          <div className="both-cat-container">
            <div className="categories-container">
              <div className="cat-container cat-contain">
                <p>{category1}</p>
              </div>
              <div className="cat-container1 cat-contain">
                <p>{category2}</p>
              </div>
              {category3 && (
                <div className="cat-container2 cat-contain">
                  <p>{category3}</p>
                </div>
              )}
            </div>
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
