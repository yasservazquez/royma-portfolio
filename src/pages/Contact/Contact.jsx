import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <Navbar />
      <div className={`section_header`}>
        <h2>Contact Us</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>Contact</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
