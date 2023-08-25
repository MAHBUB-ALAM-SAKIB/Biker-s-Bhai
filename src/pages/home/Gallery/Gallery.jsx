import React from 'react'
import Bikeitem from "../../../helper/Bikeitem.jsx"
import { Bikelist } from '../../../helper/Bikelist'
import "./Gallery.css"


function Gallery() {
  return (
    <>
    <div className="gallery">
      <h1 className='title'>Our Bike Collection</h1>
      <div className="bikeList">
        {Bikelist.map((bikeitem,key)=>{
          return (<Bikeitem
          key={key}
          image={bikeitem.image}
          name={bikeitem.name}
          engine={bikeitem.Engine}
          speed={bikeitem.Speed}
          milage={bikeitem.Milage}
          price={bikeitem.price}/>
          )

        })}
      </div>
    </div>
    </>
  )
}

export default Gallery