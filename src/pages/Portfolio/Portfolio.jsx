import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className={`section_header`}>
        <h2>My Work</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Portfolio</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
