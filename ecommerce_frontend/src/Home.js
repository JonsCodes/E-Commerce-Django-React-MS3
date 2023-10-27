import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/Home.css'
import Footer from './components/Footer'


const Home = () => {
  return (


    <body>


      <header>

        <Navbar />
      </header>

      <main>
        <div className="mainContainer">
          <div className="mainLeft">
            <h1 className="mainHeading">
              Best Fighting <br />
              Equipment
            </h1>
            <p className="mainContent">
              Gear up with the best and conquer the ring! Wise Guy Colloections: Your Victory, Your Style, Your Choice. Elevate your performance, stay safe, and dominate your competition. Unleash Your Inner Warrior with Wise Guy Collections today!
            </p>
            <div className='button' >
              <Link className='shopBtn' to='/shop'>Shop Now</Link>
            </div>
          </div>

          <div className="mainRight">
            <img src="/images/FSFC-WiseGuy-Collections-Brand.jpg" alt="WiseGuyColletionLogo" className="wiseGuyLogo" />
          </div>

        </div>


      </main>
    </body>

  )
}

export default Home