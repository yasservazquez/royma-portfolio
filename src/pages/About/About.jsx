import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import aboutCSS from "./About.module.css";
import aboutImg from "../../assets/about_01-1.png";

function About() {
  return (
    <div>
      <Navbar />
      {/* Header */}
      <div className={`section_header`}>
        <h2>About Us</h2>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <i className="ri-arrow-right-s-line"></i>
            <span>About</span>
          </li>
        </ul>
      </div>

      {/* About Cards */}
      <section>
        <div className={aboutCSS.about_wrapper}>
          <h2>
            I Complete <br /> Every Step Carefully
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
            maxime excepturi tempore incidunt omnis cum dolores optio soluta
            repellendus atque. Soluta neque reprehenderit eos a?
          </p>
          <div className={aboutCSS.about_cards}>
            <div className={aboutCSS.card}>
              <h3>01</h3>
              <h1>Collect Idea</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quisquam eum molestias.
              </p>
              <i className="ri-arrow-right-s-line"></i>
            </div>
            <div className={aboutCSS.card}>
              <h3>02</h3>
              <h1>Create Prototype</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quisquam eum molestias.
              </p>
              <i className="ri-arrow-right-s-line"></i>
            </div>
            <div className={aboutCSS.card}>
              <h3>03</h3>
              <h1>Launch Product</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quisquam eum molestias.
              </p>
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className={aboutCSS.about}>
        <div className={aboutCSS.about_container}>
          <div className={aboutCSS.about_info}>
            <small className="title">About Me</small>
            <h2>
              Digital Web Products <br /> for Amazing Clients
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              molestias consectetur sapiente, tempore accusantium dignissimos
              quae cumque non deleniti tenetur officiis voluptatibus impedit
              voluptas eveniet corporis maxime ut minus id velit obcaecati amet
              possimus rerum.
            </p>
            <div className={aboutCSS.achievement}>
              <p>
                123+ <span>Happy Clients</span>
              </p>
              <p>
                230+ <span>Incredible Projects</span>
              </p>
              <p>
                18+ <span>Awards Winning</span>
              </p>
            </div>
          </div>
          <div className={aboutCSS.about_image}>
            <img src={aboutImg} alt="about-image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
