import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/Home.css'
import Footer from './components/Footer'


const Home = () => {
  return (

    <main>

      <header>

        <Navbar />
      </header>
      <body>


        <div className="parentBox">

          <div className='box1'>
            <img className="wiseGuyCollection-Logo" src="/images/WiseGuyCollections.jpg" alt="WiseGuyCollections Logo" />

            <div className='box3Box4'>

              <div className="box3">
                <Link to='/shop'>
                  <img className="fightGear" src="/images/WiseGuyCollections.jpg" alt="WiseGuyCollections Logo" /></Link>
              </div>

              <div className="box4">
                <Link to='/shop'>
                  <img className="fightGear" src="/images/WiseGuyCollections.jpg" alt="WiseGuyCollections Logo" /></Link>
              </div>
            </div>
          </div>

          <div className="websiteStory">
            <h1>Website Story</h1>
          </div>
        </div>
        {/* boxes are going to be from left to right */}


        {/* this is going to be a gear slide show image */}
        <div className="box5">
          <h1>Test</h1>
        </div>
        <div className="box6">
          <h1>Test</h1>
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </main>
  )
}

export default Home