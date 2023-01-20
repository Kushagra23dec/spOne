import React, { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const CardDetails = ()=>{
    const [data, setData] = useState([]);
    const {id} = useParams();
    console.log(id);
    useEffect(()=>{
        fetchCardData()
    },[])


    async function fetchCardData(){
        const response = await fetch('https://fakestoreapi.com/products/'+id);
        const data = await response?.json();
        setData(data);
        console.log(data);
    }

    
    return(data === [])?  
       <Shimmer />
    :(
        
        <div className="cardDetails-page">
          <div className="cardImage-div">
          <img src={data?.image} />
           </div>

            <div className="cardDetails-section2">
            <h1>{data?.title}</h1>
            <h1 >Price: ₹{data?.price}</h1>
            <h1> Rating: {data?.rating?.rate} Stars</h1>
            <h1> Hurry! only {data?.rating?.count} remaining</h1>
            <button className="Add-to-Cart-btn">Add to cart</button>
            </div>

        </div>

        
    )
}

export default CardDetails;