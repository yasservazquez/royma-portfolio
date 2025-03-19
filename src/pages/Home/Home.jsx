import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import homeCSS from "./Home.module.css";
import heroImg from "../../assets/home_1-slider_01_royma.png";
// import aboutImg from "../../assets/home_01-1.png";
import aboutImg from "../../assets/home_1-slider_01_royma.png";
import GraphicDesign from "../../assets/GraphicDesign.png";
import PhotoRetouch from "../../assets/PhotoRetouch.png";
import MotionDesign from "../../assets/MotionDesign.png";
import UIUXDesign from "../../assets/UIUXDesign.png";

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

      {/* Skills Section */}
      <section>
        <div className={homeCSS.skills_wrapper}>
          <div className={homeCSS.skills_header}>
            <small className="title">My Skills</small>
            <h2>
              What My Design <br />
              Skills Included
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos ut maxime veritatis cumque officia voluptas, in autem
              neque nisi. Natus doloremque officiis, animi nemo repudiandae
              eligendi sunt, a ullam excepturi earum atque! Necessitatibus,
              placeat excepturi.
            </p>
            <div className={homeCSS.skills_container}>
              <div className={homeCSS.skills_lines}>
                <div className={homeCSS.skills_line}>
                  <div className={homeCSS.skills_line_progress}>
                    <p>PhotoShop</p>
                    <p>80%</p>
                  </div>
                  <div className={homeCSS.line}></div>
                </div>
                <div className={homeCSS.skills_line}>
                  <div className={homeCSS.skills_line_progress}>
                    <p>Illustrator</p>
                    <p>72%</p>
                  </div>
                  <div className={homeCSS.line}></div>
                </div>
                <div className={homeCSS.skills_line}>
                  <div className={homeCSS.skills_line_progress}>
                    <p>Sketch</p>
                    <p>68%</p>
                  </div>
                  <div className={homeCSS.line}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={homeCSS.skills_cards}>
            <div className={homeCSS.skills_card}>
              <img src={UIUXDesign} alt="ui/ux-design-image" />
              <h2>UI/UX Design</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                doloribus!
              </p>
            </div>
            <div className={homeCSS.skills_card}>
              <img src={GraphicDesign} alt="ui/ux-design-image" />
              <h2>Graphic Design</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                doloribus!
              </p>
            </div>
            <div className={homeCSS.skills_card}>
              <img src={MotionDesign} alt="ui/ux-design-image" />
              <h2>Motion Design</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                doloribus!
              </p>
            </div>
            <div className={homeCSS.skills_card}>
              <img src={PhotoRetouch} alt="ui/ux-design-image" />
              <h2>Photo Retouch</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est,
                doloribus!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
