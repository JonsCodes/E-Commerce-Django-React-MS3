import React from 'react'
import { Link } from 'react-router-dom'
import '../header/Navbar.css';

// made this into a component so we don't have to retype it for different urls

const Navbar = () => {

  return (
   
    <nav>
        <div className="navContainer">
          <div className="navLeft">
            <div className="navLogo">
              <Link to={'/'}>
                <img src="/WGChitmanLogo.jpg" alt="WiseGuy hitman Logo" />
              </Link>
            </div>


            <ul className="navLinks">
              
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link className="shopBtn" to='/shop'>Shop</Link></li>
            <li><Link className="cartBtn" to='/cart-page'>Cart</Link></li>

              {/* <li>
                <Link className='navShop' to='/shop'>Shop</Link>
                <ul className="dropdown">
                  <li className="subLinks">
                    <Link className='shop' to='/shop'>Shop All</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop/gloves'>Gloves</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop/handwraps'>Hand Wraps</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop/shoes'>Shoes</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className='cart' to='/cart'>Cart</Link>
              </li> */}

            </ul>
          </div>
          <div className="navRightSide">
            <Link className="loginBtn" to='/login'>Login</Link>
            <Link className="registerBtn" to='/SignUp'>Sign Up</Link>
            {/* <Link className="cartBtn" to='/cart'>Cart</Link> */}
          </div>
        </div>

        {/* mobile side */}
        <div className="mobileMenuBtn">
          <img src="/WGChitmanLogo.jpg" alt="Menu" />
        </div>
        <div className="mobileMenu">
            <ul className="mobileLinks">
              
              <li><Link to={'/'}>Home</Link></li>

              <li>
                <Link className='navShop' to='/shop'>Shop</Link>
                <ul className="dropdown">
                  <li className="subLinks">
                    <Link className='shop' to='/shop'>Shop All</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop'>Gloves</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop'>Hand Wraps</Link>
                  </li>
                  <li className="subLinks">
                    <Link className='shop' to='/shop'>Shoes</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link className='cart' to='/cart'>Cart</Link>
              </li>

            </ul>
            </div>
      </nav>




  
  )

}

export default Navbar