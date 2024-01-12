import './Header.css'
import { FaTwitterSquare } from "react-icons/fa";


export default function Header() {
  return (
    <>
    <nav className="navbar">
        <div className="left">RUNO</div>
        <div className="right">
            <ul className="nav-items">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/">About</a></li>
                <li className="nav-item"><a href="/">Articles</a></li>
                <li className="nav-item"><a href="/">Contact Us</a></li>
                
                
               </ul>
        </div>  
    </nav>


    </>
  )
}
