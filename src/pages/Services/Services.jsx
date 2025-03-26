import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div>
      <Navbar />
      <div className={`section_header`}>
        <h2>My Services</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Services</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
