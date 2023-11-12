import React from "react";
import { Link } from "react-router-dom";
import Base from "./Base";

export default function App() {
  return (
    <Base>
      <div>
        <main className="mainContainer">
          <div className="homeContainer">
            <div className="homeHeading">
              Top-of-the-Line
              <hr />
              Combat Equipment
            </div>

            <p className="homeInfo">
              Listen up, kid. You wanna make it in this business, you gotta be
              ready to roll with the big dogs. Gear up with the elite, and
              you'll dominate the ring. Wise Guy Collections: Rise to the top,
              assert your style, and make the rest kneel. It's all about your
              victory, your attitude, your dominance. Make those other jokers
              bow down! Today, it's time to let your inner boss shine with Wise
              Guy Collections...
            </p>

            <h2>Capisci???</h2>

            <div className="HSbtn">
              <Link
                to="/shop" // Update the path to "/shop"
                className="homeBtn"
                // Add style={currentTab(history, "/shop")} if needed
              >
                Shop Now
              </Link>
            </div>
          </div>


          <div className="WGC-primary-img">
          <img 
          className="PrimaryLogo"
          src={require("../images/WiseGuyCollectionsPrimary.jpg")}
          alt="PrimaryLogo"
          />
          </div>
        </main>
      </div>
    </Base>
  );
}
