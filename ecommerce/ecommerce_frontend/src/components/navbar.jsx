import React from "react"; 
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"; 


export const Navbar  = () =>{
    return (
    <div className="navbar">
        <div className="links"></div>
        <Link to="/"> Home </Link>
        <Link to="/shop"> Collection </Link>
        <Link to="/about"> About </Link>        
        <Link to="/cart"> <ShoppingCart size={80}/> </Link>
        
    </div>
    );  
};

