import React from 'react'
import './HeroHome.css';
import System from "../Assets/web designer.png";
import { Link } from 'react-router-dom';

const HeroHome = () => {
  return (
    <div className='hero_container'>
      <div className="hero_img">
        <img src={System} alt="system" />
      </div>
      <div className="content">
        <p>I'm a React Developer</p>
        <h1>Web Designer</h1>
        <div className="hero_btn">
          <Link to='/contact' className='btn1'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroHome