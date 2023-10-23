import React from "react";
// import { Link } from 'react-router-dom'
import NavbarBS from "./components/Navbar";
import "./styles/Home.css";

const Home = () => {
  return (
    <main>
      <header>
        <NavbarBS />
      </header>
      <body>
        <div className="parentBox">
        <div className="box1">
              <h1>Box1</h1>
              </div>
              
          <div className="boxLogo">
            <img
              className="wiseGuyCollection-Logo"
              src="/images/WiseGuyCollections.jpg"
              alt="WiseGuyCollections Logo"
            />

            <div className="box3Box4">
              <div className="box3">
                <h1>Box3</h1>
              </div>

              <div className="box4">
                <h1>Box4</h1>
              </div>
            </div>
          </div>

          <div className="websiteStory">
            <h1>Website Story</h1>
          </div>
        </div>
        {/* boxes are going to be from left to right */}

        <div className="box5">
          <h1>Test</h1>
        </div>
        <div className="box6">
          <h1>Test</h1>
        </div>
      </body>
    </main>
  );
};

export default Home;
