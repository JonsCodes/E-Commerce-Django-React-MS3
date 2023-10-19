import React from "react";
import { Link } from "react-router-dom";

// Router
export default function Home () {
  return(
    <main>

    <header>
      <a href="./" className="logo">Wise Guy Collections</a>
      <nav>
      <Link to="/Login">Login</Link>
      <Link to="/SignUp">SignUp</Link>
      </nav>
    </header>
    <div className='entry'>
      <h3></h3>
      <p></p>
    </div>
    </main>
    )
}