import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

// made this into a component so we don't have to retype it for different urls

const Navbar = () => {

  return (


    <nav>
      <div className="navContainer">
        <div className="navLeft">
          <div className="navLogo">
            <Link to={'/'}>
              <img src="/images/FSFC-WiseGuy-Collections-Brand.jpg" alt="WiseGuyCollection-Logo" />
            </Link>
          </div>


          <ul className="navLinks">

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
        <div className="navRightSide">
          <Link className="loginBtn" to='/login'>Login</Link>
          <Link className="registerBtn" to='/SignUp'>Sign Up</Link>
        </div>
      </div>
    </nav>


  
  )

}

export default Navbar