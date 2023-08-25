import React from 'react'
import {PartsList} from "../../../helper/PartsList" 
import Partsitem from "../../../helper/Partsitem"
import "./Parts.css"

function Parts() {
  return (
    <>
    <div className="parts">
        <div className="title">Parts and Accessories</div>
        <div className="partsList">
            {PartsList.map((partsitem,key)=>{
                return(<Partsitem
                key={key}
                name={partsitem.name}
                image={partsitem.image}
                price={partsitem.price}/>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Parts