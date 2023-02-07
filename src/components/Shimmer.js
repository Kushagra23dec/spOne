import React from "react";
import Cards from "./Cards";

const Shimmer = ()=>{
    return(
        <div className="flex grow flex-wrap">
            {Array(10).fill("").map((e, index)=><Cards key={index}/>)}
        </div>
    )
}

export default Shimmer;