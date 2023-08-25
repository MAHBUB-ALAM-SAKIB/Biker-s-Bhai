import React from 'react'
import Logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import "./Navbar.css"


function Navbar() {
  return (
    <div className="navbar">
        <div className="leftside">
            <img src={Logo}  />
        </div>
        <div className="rightside">
            <Link to="/">Home</Link>
            <Link to="/bikeprice">Gallery</Link>
            <Link to="/parts">Parts</Link>
            <Link to="/aboutus">About Us</Link>
            <Link to="/contactus">Contact Us</Link>
           
        </div>
    </div>
  )
}

export default Navbar