import React from 'react';
import './Navbar.css';
import Header from '../Header/Header';

export default function Navbar() {
  return (
    <div className="nav-container">
      <Header />
      <div className='f-blog'>
        <div className="nav-cat"><p className='nav-c'>ADVENTURE</p></div>
        <div className='nav-title'><h1 className='nav-t'>Richird Norton photorealistic rendering as real photos</h1></div>
        <div className='nav-info'>
        <span className='nav-date'>10-10-2003</span>
           <hr className='nav-hr' />
          <span className='nav-d'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</span>
        
        </div>
      </div>
    </div>
  );
}
