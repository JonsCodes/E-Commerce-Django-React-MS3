import React from 'react'
import '../styles/Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <body>
        <footer className='footerP'>
            <div className="containers">
                <div className="row">
                    <div className="footer-col">
                        <h4>Our Home</h4>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Shop our store</h4>
                        <ul>
                            <li>
                                <Link to='/shop'>Shop</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>View your cart</h4>
                        <ul>
                            <li>
                                <Link to='/cart'>Cart</Link>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>
        </footer>
    </body>
  )
}

export default Footer