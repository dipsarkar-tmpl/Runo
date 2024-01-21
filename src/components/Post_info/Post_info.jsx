import "./Post_info.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


export default function Post_info() {
  return (
    <>
      <div className="post-info-container">
        <div className="post-info-category">
          <div className="category-items">
            <p>ADVENTURE</p>
          </div>
          <div className="category-items">
            <p>PHOTO</p>
          </div>
          <div className="category-items">
            <p>DESIGN</p>
          </div>
        </div>
        <hr className="Post-info-hr" />
        <div className="post-info-footer">
          <div className="left-post-info">
            <div className="author-img"></div>
            <div className="author-info">
              <span className="author-name">By Jennifer Lawrence</span>
              <span className="author-pro">Thinker & Designer</span>
            </div>
          </div>
          <div className="right-post-info">
            <div className="right-post-icons">
              <a className="right-post-a" href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaFacebook /></a>
              <a className="right-post-a" href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaTwitter /></a>
              <a className="right-post-a" href="https://www.instagram.com/dipsarkar1010/" target="_blank"><FaInstagramSquare /></a>
              <a className="right-post-a" href="https://www.instagram.com/dipsarkar1010/" target="_blank"><IoLogoYoutube /></a>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
