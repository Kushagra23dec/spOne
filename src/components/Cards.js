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
    
    <div className="w-48  shadow-md m-5 p-2 rounded-md ">
    <div className="">
    <img className="" src={image} />
    </div>  
      <h3 className="text-lg font-semibold ">{title}</h3>
      <h3 className="font-semibold text-gray-800">Price: ₹{price}</h3>
      <h3 className="font-semibold text-blue-700">Type: {category}</h3>
      <h3 className="font-semibold text-gray-600">Ratings: {rating?.rate}  </h3>
    </div>
    
  )
}

export default Cards;