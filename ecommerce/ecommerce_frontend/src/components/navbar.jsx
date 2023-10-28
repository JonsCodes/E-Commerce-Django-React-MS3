import React from "react"; 
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css"; 


export const Navbar  = () =>{
    return (
    <div className="navbar">
        <div className="links"></div>
        <Link to="/"> Collection </Link>
        {/* <Link to='/login-signup'> Log In / Sign Up</Link> */}
        <Link to="/cart"> <ShoppingCart size={80}/> </Link>
        
    </div>
    );  
};

