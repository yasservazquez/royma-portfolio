import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import homeCSS from "./Home.module.css";
import heroImg from "../../assets/home_1-slider_01_royma.png";
// import aboutImg from "../../assets/home_01-1.png";
import aboutImg from "../../assets/home_1-slider_01_royma.png";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Header Wrapper */}
      <div className={homeCSS.Header_wrapper}>
        <div className={homeCSS.header_content}>
          <h2>
            Hi, I m Royma Castillo - <span>Graphic Designer</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            corporis illum perspiciatis rerum, ipsa nam laudantium unde, fuga
            vitae inventore sed ratione. Sequi, consectetur odio!
          </p>
          <div className={homeCSS.social_contact}>
            <p>
              Email: <span>designroym@gmail.com</span>
            </p>
            <p>
              Behance: <span>behance.net</span>
            </p>
          </div>
          <div className={homeCSS.header_btns}>
            <button>Download CV</button>
            <button>Hire Me Now</button>
          </div>
        </div>
        <div className={homeCSS.header_image}>
          <img src={heroImg} alt="hero-image" />
        </div>
      </div>

      {/* Services Cards */}
      <section>
        <div className={homeCSS.services_cards}>
          <div className={homeCSS.service_card}>
            <i className="ri-checkbox-circle-fill"></i>
            <div className={homeCSS.service_details}>
              <h3>Graphic Designer</h3>
              <p>Creative Website for You</p>
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className={homeCSS.service_card}>
            <i className="ri-checkbox-circle-fill"></i>
            <div className={homeCSS.service_details}>
              <h3>Graphic Designer</h3>
              <p>Creative Website for You</p>
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </div>
          <div className={homeCSS.service_card}>
            <i className="ri-checkbox-circle-fill"></i>
            <div className={homeCSS.service_details}>
              <h3>Graphic Designer</h3>
              <p>Creative Website for You</p>
            </div>
            <i className="ri-arrow-right-s-line"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={homeCSS.about_wrapper}>
        <div className={homeCSS.about_header}>
          <img src={aboutImg} alt="about-image" />
        </div>
        <div className={homeCSS.about_content}>
          <small className="title">about Me</small>
          <h2>
            Need Creative Design ? <br /> I Can Help You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            veniam ea tempore numquam dolorum placeat, alias fugit nulla
            inventore mollitia cumque unde nam, obcaecati totam in. Corporis
            vitae delectus id vero fugit?
          </p>
          <h4>You Can Follow Me Also Here</h4>
          <div className={homeCSS.social_accounts}>
            <div className={homeCSS.social_accounts_card}>
              <i className="ri-behance-line"></i>
              <h2>Behance</h2>
            </div>
            <div className={homeCSS.social_accounts_card}>
              <i className="ri-dribbble-line"></i>
              <h2>Dribbble</h2>
            </div>
            <div className={homeCSS.social_accounts_card}>
              <i className="ri-instagram-line"></i>
              <h2>Instagram</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
