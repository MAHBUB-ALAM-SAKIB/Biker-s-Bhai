import React from 'react'
import img from "../../../assets/ok3.jpg"
import "./About.css"
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${img})`}}></div>
        <div className="aboutBottom">
        <h1>About Us</h1>
        <p>Welcome to <b>Biker's Bhai</b> – a haven for cycling enthusiasts. Established with an unwavering passion for bikes. Our showroom is a testament to our commitment to provide an exceptional biking experience, guided by our dedicated team of experts who offer personalized guidance and top-notch maintenance services. As advocates of sustainable transportation, we're proud to present a curated selection of bikes, including eco-friendly options. Our showroom exemplifies our dedication to providing an unrivaled riding experience, directed by our skilled staff of professionals who provide individualized guidance and top-tier maintenance services. We're committed to providing a curated variety of motorcycles that appeal to varied interests and styles as advocates for thrilling journeys and open-road exploration</p>
        </div>
    </div>
  )
}

export default About