import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";


const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#6b0821", textShadow: "0 0 8px white", };
  } else {
    return { color: "#FFFFFF" };
  }
};

const Menu = ({ history, path }) => {
  return (
    <div className="NavBar">
      <ul>
        <li>
          <img 
          className="Hitmanlogo"
          src={require("../images/WGChitmanLogo.jpg")}
          alt="WGC hitman logo"
          />
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/")}
            className="nav-link"
            to="/"
          >
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            style={currentTab(history, "/about-us")} // Apply currentTab to the "About Us" link
            className="nav-link"
            to="/about-us" // Set the path to "/about-us"
          >
            About Us
          </Link>
        </li> */}
        <li className="nav-item">
          <Link
            style={currentTab(history, "/shop")}
            className="nav-link"
            to="/shop"
          >
            Shop
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {isAuthenticated() && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              Dashboard
            </Link>
          </li>
          // **********************************************************************
        )}
        {!isAuthenticated() && (
          <Fragment>
            <li className="Right-nav-item">
              <Link
                style={currentTab(history, "/signup")}
                className="R-navLinks"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="Right-nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="R-navLinks"
                to="/signin"
              >
                Signin
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="Right-nav-item">
            <span
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
              className="R-navLinks"
            >
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
