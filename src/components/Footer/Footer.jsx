import "./Footer.css";
import { FaFacebook, FaLeftLong } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="footer-container" id="footer">
        <div className="upper-footer">
          <div className="upper-container">
            <div className="upper-container-item1">
              <h4>Contact the Publisher</h4>
              <p>mike@runo.com</p>
              <p>+944 450 904 505</p>
            </div>
            <div className="upper-container-item2">
              <h4>
                <a href="/">Explorate</a>
              </h4>
              <p>
                <a href="/">About</a>
              </p>
              <p>
                <a href="/">Partners</a>
              </p>
              <p>
                <a href="/">Job Opportunities</a>
              </p>
              <p>
                <a href="/">Membership</a>
              </p>
            </div>
            <div className="upper-container-item3">
              <h4>Headquater</h4>
              <p>191 Middleville Road, NY 1001, Sydney Australia</p>
            </div>
            <div className="upper-container-item4">
              <h4>Connections</h4>
              <div className="foot-icons">
            <a href="https://www.instagram.com/dipsarkar1010/" target="_blank">  <FaFacebook style={{color:"white", margin:"10px",marginRight:"5px"}} /> </a>
            <a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaSquareTwitter style={{color:"white",margin:"10px"}}/></a>
            <a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaYoutube style={{color:"white",margin:"10px"}}/></a>
            <a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaPinterest style={{color:"white",margin:"10px"}}/></a>
            <a href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaInstagram style={{color:"white",margin:"10px"}}/></a>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-footer">
          <div className="left-lower">
            <p>2021 | RUNO Publisher Studio</p>
          </div>
          <div className="right-lower">
            <p>
              <a href="/">Subscribe Now</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
