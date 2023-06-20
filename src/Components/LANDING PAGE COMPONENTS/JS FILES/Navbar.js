import React from "react";
import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../CSS FILES/Navbar.css";
import logo from '../IMAGES/HYPE.png'
import searchicon from '../IMAGES/search.png'
import carticon from '../IMAGES/cart.png'
import usericon from '../IMAGES/user.png'

const Navbar = () => {
  const navref = useRef();

  const showNavbar = () =>{
    navref.current.classList.toggle("responsive_nav");
  }

  return (
    <>
      <div className="navbar ">
        <div className="options" ref={navref}>
          <a className="buttons" href="/">
            MENS
          </a>
          <a className="buttons" href="/">
            WOMENS
          </a>
          <a className="buttons" href="/">
            KIDS
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes/>
          </button>
        </div>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars/>
        </button>
        <div className="logo">
          <img src={logo} alt="HYPE" />
        </div>
        <div className="icons">
          <a href="/">
            <img src={searchicon} alt="HYPE" />
          </a>
          <a href="/">
            <img src={carticon} alt="HYPE" />
          </a>
          <a href="/">
            <img src={usericon} alt="HYPE" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
