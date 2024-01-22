import "./Card_type2.css";

export default function Card_type2(props) {
  return (
    <div className="card2-container">
     
      <div className="card2-cat">
        <p>{props.category}</p>
      </div>
      <div className="main-content">
      <div className="card2-date">
        <p>{props.date}</p>
      </div>
      <div className="card2-title">
        <h2>{props.title}</h2>
      </div>
      <div className="card2-des">
        <p>
          {props.content}
        </p>
      </div>
      </div>

     
    </div>
  
  );
}
