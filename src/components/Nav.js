import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";
const Nav = ()=>{
    return(
        <div className="flex justify-between bg-pink-200 shadow-md flex-wrap">
           <Link className="atag" to="/"> <img className="w-1/5 ml-4" src={image} /> </Link> 
            <ul className="flex gap-2 py-6 text-lg font-semibold mr-6 flex-wrap">
                <li> <Link className="atag" to="/">Home</Link>  </li> 
                <li><Link className="atag" to="/about">About-Us</Link></li>
                <li><Link className="atag" to="/contact">Contact-Us</Link></li>
            </ul>
        </div>
    )
}

export default Nav;