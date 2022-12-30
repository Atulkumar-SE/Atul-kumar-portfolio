import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //---------UseState for hamburger btn-------------------------
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
//---------------useState for navbar bg-color on scroll-----------
  const [color, setColor] = useState(false);
  const changecolor = () =>{
    if (window.scrollY >=100){
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll",changecolor);
  return (
    <>
      <div className={color ? "Navbar_container Navbar_container-bg" : "Navbar_container"}>
        <Link to="/">
          <h1>Atul Kumar</h1>
        </Link>
        <ul className={click ? "nav_menu active" : "nav_menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "white" }} />
          ) : (
            <FaBars size={30} style={{ color: "white" }} />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
