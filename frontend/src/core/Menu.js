import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#6b0821", textShadow: "0 0 8px white" };
  } else {
    return { color: "#FFFFFF" };
  }
};

const DashboardSpan = ({ history }) => {
  const handleDashboardClick = () => {
    // Navigate to the user dashboard
    history.push("/user/dashboard");
  };

  return (
    <span className="dashboard" onClick={handleDashboardClick}>
      Dashboard
    </span>
  );
};

const Menu = ({ history }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { user } = isAuthenticated();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link style={currentTab(history, "/about")} className="nav-link" to="/about">
            About
          </Link>
        </li>
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
        {!isAuthenticated() && (
          <Fragment>
            <div className="Right-nav-item">
              <li className="RightR-nav-item">
                <Link
                  style={currentTab(history, "/signup")}
                  className="RR-navLinks"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="RightR-nav-item">
                <Link
                  style={currentTab(history, "/signin")}
                  className="R-navLinks"
                  to="/signin"
                >
                  Signin
                </Link>
              </li>
            </div>
          </Fragment>
        )}
        {isAuthenticated() && (
          <div className="Right-nav-item">
            <li className="Rnav-item">
              <div className={`nav-dropdown ${isDropdownOpen ? "active" : ""}`}>
                <div className="dropdown" onClick={handleDropdownToggle}>
                {user.name}
                </div>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Use the DashboardSpan component here */}
                    <DashboardSpan history={history} />
                    <hr/>
                    <span
                      className="signout"
                      onClick={() => signout(() => history.push("/"))}
                    >
                      Signout
                    </span>
                    <hr/>
                  </div>
                )}
              </div>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
