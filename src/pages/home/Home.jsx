import React from 'react'
import img from "../../assets/lol.jpg"
import { Link } from 'react-router-dom'
import "./Home.css"


function Home() {
  return (
   <>
   <div className="home" style={{backgroundImage: `url(${img})`}}>
    <div className="container">
        <h1> Welcome to Biker's Bhai</h1>
        <p>You can buy your favourite Bike from here</p>
        <Link to="/bikeprice">
            <button>Order Bike</button>
        </Link>
        <Link to="/parts">
            <button>Order Parts</button>
        </Link>
    </div>
   </div>
   </> 
  )
}

export default Home