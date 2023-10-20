import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import './styles/Home.css'

const Home = () => {
  return (
    <main>

    <header>
      
    </header>

    <div className='entry'>
      </div>
    <div className="webName">
      
    </div>
    
      
    
    <div className="headerParentBox">

      <div className="wiseGuyCollectionHeaderLogo">
        <Link href="./" >Wise Guy Collections</Link>
      </div>

     <Navbar />

    </div>

    <div className="parentBox">

        <div >
            <img className="wiseGuyCollection-Logo" src="/images/WiseGuyCollections.jpg" alt="WiseGuyCollections Logo" />
        </div>
        <div className="websiteStory">

        </div>
        {/* boxes are going to be from left to right */}
        <div className="box3">

        </div>
        <div className="box4">

        </div>
        <div className="box 5">

        </div>
        <div className="box 6">

        </div>
    </div>
    </main>
  )
}

export default Home