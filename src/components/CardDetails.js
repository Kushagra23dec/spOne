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
        
    
        <div className="flex p-5 gap-5 flex-wrap grow  ">
          
          <div className="w-48  ">
          <img className="w-48 hover:w-80" src={data?.image} />

          </div>
        
            <div className="font-semibold text-xl text-gray-900">
            <h1 className="font-bold text-3xl mb-3" >{data?.title}</h1>
            <h1 className="mb-3">Price: ₹{data?.price}</h1>
            <h1 className="mb-3"> Rating: {data?.rating?.rate} Stars</h1>
            <h1 className="mb-3"> Hurry! only {data?.rating?.count} remaining</h1>
            <button className="bg-gradient-to-r from-green-500 to-blue-500  text-2xl text-white font-semibold rounded-md px-2 hover:from-orange-500 hover:to-yellow-500">Add to cart</button>
            </div>

        </div>
        
        
    )
}

export default CardDetails;