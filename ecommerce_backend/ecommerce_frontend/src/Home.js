import React from "react";
import { Link } from "react-router-dom";

// Router
export default function Home () {
  return(
    <main>

    <header>
      <a href="./" className="logo">Wise Guy Collections</a>
      <nav>
      <Link to="/login">Login</Link>
      <Link to="/signUp">SignUp</Link>
      <Link to='/shop'>Shop</Link>
      </nav>
    </header>
    <div className='entry'>
      <h3></h3>
      <p></p>
    </div>
    </main>
    )
}