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
                <Link className='shop' to='../pages/shop/shop'>Shop</Link>
                <Link className='cart' to='../pages/shop/cart.jsx'>Cart</Link>
            </div>

           

        </div>

    </nav>
  )
}

export default Navbar

// import { Cart } from './pages/cart/cart';
// import { Shop } from './pages/shop/shop'; ecommerce_backend\ecommerce_frontend\src\pages\shop\shop.jsx