import React from "react";
 

const Cards = (
  {
    title,
    image,
    price,
    category,
    rating,
    id
  }
) => {
  return (
    
    <div className="cards-div">
    <div className="image-div">
    <img className="item_img" src={image} />
    </div>  
      <h3 className="card-text">{title}</h3>
      <h3 className="card-text">From: ₹{price}</h3>
      <h3 className="card-text">Type: {category}</h3>
      <h3 className="card-text">Ratings: {rating?.rate}  </h3>
    </div>
    
  )
}

export default Cards;