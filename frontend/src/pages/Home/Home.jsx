import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/header/Navbar';
import '../Home/Home.css';

const Home = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <main>
        <div className="mainContainer">
          <div className="mainLeft">
            <h1 className="mainHeading">
              Top-of-the-Line <br />
              Combat Equipment
            </h1>
            <p className="mainContent">
              Listen up, kid. You wanna make it in this business, you gotta be ready to roll with the big dogs. Gear up with the finest, and you'll own the ring. Wise Guy Collections – it's all about your victory, your style, your choice. Get yourself on top, keep yourself protected, and make those other jokers bow down. Today, it's time to unleash your inner warrior with Wise Guy Collections. capisci?
            </p>
            <div className='button'>
              <Link className='shopBtn' to='/shop'>Shop Now</Link>
            </div>
          </div>

          <div className="mainRight">
            <img src="/src/assets/logos/FSFC-WiseGuy-Collections-Brand.jpg" alt="WiseGuyCollectionLogo" className="wiseGuyLogo" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
