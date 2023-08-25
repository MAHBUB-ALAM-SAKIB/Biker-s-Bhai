import React from 'react'
 import "./Bikeitem.css"

function Bikeitem({name,image,price,engine,milage,speed}) {
    
  return (
    <>
    <div className="bikeitem">
        <div className="image">
            <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <p>{engine}</p>
        <p>{speed}</p>
        <p>{milage}</p>
        <p>{price}</p>
    </div>
    </>
  )
}

export default Bikeitem