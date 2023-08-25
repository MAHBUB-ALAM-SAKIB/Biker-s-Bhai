import React from 'react'
import "./Partsitem.css"

function Partsitem({name,image,price}) {
  return (
    <><div className="partsitem">
      <div className="image">
        <img src={image} />        
      </div>
      <h2>{name}</h2>
      <p>{price}</p>
    </div>
    
    </>
  )
}

export default Partsitem