import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
const Login = () => {
  return (

    <body>
    <header>
    <Navbar />
  </header>
  
  <main>
    <button><Link to='/signup'>signup</Link></button>
 
  </main>
  </body>
  )
}

export default Login