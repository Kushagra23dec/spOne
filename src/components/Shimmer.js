import React from "react";
import Cards from "./Cards";

const Shimmer = ()=>{
    return(
        <div className="cards-container">
            {Array(8).fill("").map((e, index)=><Cards key={index}/>)}
        </div>
    )
}

export default Shimmer;