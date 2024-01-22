import "./Card.css";


export default function Card({ category, date, content, title, image }) {
  return (
    <div className="card-container">
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
  );
}
