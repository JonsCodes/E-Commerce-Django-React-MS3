import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-black text-white p-4",
  children,
}) => {
  return (
    <div className="bg-black text-white">
      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-black mt-auto py-3">
        <div className="container-fluid bg-black text-white text-center py-3">
          <h4>If you got any questions, reach us at support@wiseguyscollections.com</h4>
          <button className="btn btn-dark btn-lg">Contact Us</button>
          <div className="container">
            <span className="text-white">
              Copywrite 2020 @wiseguyscollections.com
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Base;
