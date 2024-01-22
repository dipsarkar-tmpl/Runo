import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        
          <div className="img-container">
            <div className="cat-container">
              <p>{props.category}</p>
            </div>
          </div>
          <div className="date-container">
            <p>{props.date}</p>
          </div>
          <div className="title-container">
            <h2>{props.title}</h2>
          </div>
          <div className="des-container">
            <p>
              {props.content}
            </p>
          </div>
        </div>
      
    </>
  );
}
