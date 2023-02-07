import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {
    const [cardData, setCard] = useState([]);


    useEffect(() => {
        fetchData()

    }, [])

    async function fetchData() {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        setCard(data);
    }


    return (cardData?.length === 0) ?
        <Shimmer />
        :
        (

            <div className="flex flex-wrap justify-center">
                {cardData?.map((data ) => {
                    return <Link key={data?.id} to={"/cardDetails/" + data?.id}  >
                        <Cards  {...data} />
                    </Link>
                })}
            </div>

        )
}

export default Body;