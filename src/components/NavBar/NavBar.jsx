import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Neuron <span>Finance</span></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/service">Services</Link></li>
        <li><Link to="/feature">Feature</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/blogs">Blog</Link></li>
        <li><Link to="/works">Works</Link></li>
      </ul>
      <GiHamburgerMenu className='menuIcon'/>
      <MdOutlineClose className='menuClose'/>
    </nav>
  );
};

export default Navbar;
