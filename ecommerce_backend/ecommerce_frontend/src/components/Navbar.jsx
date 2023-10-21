import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
// made this into a component so we don't have to retype it for different urls
const Navbar = () => {
  return (
    <nav className="hbox"> 
        <div className="headerParentBox">
             <div className="wiseGuyCollectionHeaderLogo">
                <Link to="/" >Wise Guy Collections</Link>
            </div>
            <div className='secondBox'>
                <Link className='login' to="/login">Login</Link>
                <Link className='signUp' to="/signUp">SignUp</Link>
                <Link className='shop' to='/shop'>Shop</Link>
                <Link className='checkout' to='/checkout'>Checkout</Link>
            </div>

           

        </div>

    </nav>
  )
}

export default Navbar