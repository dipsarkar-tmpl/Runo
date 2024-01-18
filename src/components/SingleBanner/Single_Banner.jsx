import Header from "../Header/Header";
import "./Single_Banner.css";

export default function Single_Banner() {
  return (
    <>
      <div className="Single-banner-container">
        <Header />
        <div className="banner-content">
           <div className="banner-cat">
            <p className="ban-c">FASHION</p>
           </div>
           <div className="banner-title">
            <h1 className="ban-t">
              Richird Norton photorealistic rendering as real photos
            </h1>
            </div>
        
            <div className="ban-info">
             <p className="ban-i">
            Progressively incentivize cooperative systems through technically
            sound functionalities. The credibly productivate seamless data.
             </p>
            </div>
            <div className="ban-auth">
            <p className="ban-auth-name">By Jennifer Lawrence</p>
           </div>
           </div>
      </div>
    </>
  );
}
