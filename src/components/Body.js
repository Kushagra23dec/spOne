import React,{useEffect, useState} from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";


const Body = ()=>{
    const [cardData, setCard] = useState([]);


    useEffect( ()=>{
          fetchData()
        
    },[])

    async function fetchData(){
        const response = await fetch('https://fakestoreapi.com/products');
        const data =  await  response.json();
        console.log(data[0]);
        setCard(data);
    }


    return (cardData.length === 0)?
    <Shimmer />
    :
    (
        <>
        <div className="cards-container">
             {cardData.map((data, index)=>{return  <Link className="atag" to={"/cardDetails/"+data.id} key={data.id} >
                                                   <Cards  {...data} /> 
                                                   </Link> })}
        </div>
        </>
    )
}

export default Body;