import React from "react";
import { Link } from "react-router-dom";
import image from "../assets/logo.png";
const Nav = ()=>{
    return(
        <div className="nav-container">
           <Link className="atag" to="/"> <img className="logo" src={image} /> </Link> 
            <ul>
                <li> <Link className="atag" to="/">Home</Link>  </li> 
                <li><Link className="atag" to="/about">About-Us</Link></li>
                <li><Link className="atag" to="/contact">Contact-Us</Link></li>

            </ul>
        </div>
    )
}

export default Nav;