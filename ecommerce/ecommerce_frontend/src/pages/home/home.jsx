import React from "react";
import { Link } from "react-router-dom";
import "../home/home.css";
import "../../styles/fonts.css";

export const Home = () => {
  return (
    <div>
      <main>
        
        <div className="mainContainer">
          <div className="mainLeft">
            <div className="mainHeading">
              Top-of-the-Line 
              <hr/>
            Combat Equipment
              
              
            </div>
            <p className="mainContent">
              Listen up, kid. You wanna make it in this business, you gotta be
              ready to roll with the big dogs. Gear up with the elite, and
              you'll dominate the ring. Wise Guy Collections: Rise to the top,
              assert your style, and make the rest kneel. It's all about your
              victory, your attitude, your dominance. Make those other jokers
              bow down. Today, it's time to let your inner boss shine with Wise
              Guy Collections...<br/><h2>Capisci???</h2>
            </p>
            <div className="button">
              <Link className="shopBtn" to="/Shop">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="mainRight">
            <img
              src="/WiseGuyCollectionsPrimary.jpg"
              alt="WiseGuyCollectionLogo"
              className="wiseGuyLogo"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

