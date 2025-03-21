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

import portfolio1 from "../../assets/portfolio_01-1140x570.jpg";
import portfolio2 from "../../assets/portfolio_02-1140x1140.jpg";
import portfolio3 from "../../assets/portfolio_03-1140x1140.jpg";
import portfolio4 from "../../assets/portfolio_04-1140x1140.jpg";
import portfolio5 from "../../assets/portfolio_05-1140x1140.jpg";
import portfolio6 from "../../assets/portfolio_06-1140x570.jpg";

import brandsLogo01 from "../../assets/partners-2-hover.jpg";
import brandsLogo02 from "../../assets/partners-3-hover.jpg";
import brandsLogo03 from "../../assets/partners-4-hover.jpg";
import brandsLogo04 from "../../assets/partners-5-hover.jpg";
import brandsLogo05 from "../../assets/partners-6-hover.jpg";
import brandsLogo06 from "../../assets/partners-7-hover.jpg";

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

      {/* Project Section */}
      <section>
        <div className={homeCSS.project_wrapper}>
          <small className="title">My Projects</small>
          <h2>Meet My Projects</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
            aut quo repudiandae, architecto nam cum ipsum odit maxime fugiat,
            nisi, soluta mollitia cupiditate blanditiis autem! Nulla laboriosam
            explicabo nemo! Tempora obcaecati expedita laudantium saepe in!
          </p>
          <div className={homeCSS.project_cards}>
            <div className={homeCSS.project_card}>
              <img src={portfolio1} alt="project-image-01" />
              <div className={homeCSS.project_information}>
                <h3>Urbun Experience</h3>
                <p>Photography</p>
              </div>
            </div>
            <div className={homeCSS.project_card}>
              <img src={portfolio2} alt="project-image-02" />
              <div className={homeCSS.project_information}>
                <h3>Graphic Design</h3>
                <p>Web Design</p>
              </div>
            </div>
            <div className={homeCSS.project_card}>
              <img src={portfolio3} alt="project-image-03" />
              <div className={homeCSS.project_information}>
                <h3>Motion Design</h3>
                <p>Web Design</p>
              </div>
            </div>
            <div className={homeCSS.project_card}>
              <img src={portfolio4} alt="project-image-04" />
              <div className={homeCSS.project_information}>
                <h3>Illustration Design</h3>
                <p>Web Design</p>
              </div>
            </div>
            <div className={homeCSS.project_card}>
              <img src={portfolio5} alt="project-image-05" />
              <div className={homeCSS.project_information}>
                <h3>Graphic Design</h3>
                <p>Web Design</p>
              </div>
            </div>
            <div className={homeCSS.project_card}>
              <img src={portfolio6} alt="project-image-06" />
              <div className={homeCSS.project_information}>
                <h3>Illustration Design</h3>
                <p>Web Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section>
        <div className={homeCSS.brands_wrapper}>
          <h2>Brands That I Have Worked With</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
            commodi laudantium, nemo animi accusantium sint, alias adipisci
            optio similique inventore voluptas? Mollitia cumque eveniet
            accusamus.
          </p>
          <div className={homeCSS.brands}>
            <div className={homeCSS.brand}>
              <img src={brandsLogo01} alt="brands-logoes" />
            </div>
            <div className={homeCSS.brand}>
              <img src={brandsLogo02} alt="brands-logoes" />
            </div>
            <div className={homeCSS.brand}>
              <img src={brandsLogo03} alt="brands-logoes" />
            </div>
            <div className={homeCSS.brand}>
              <img src={brandsLogo04} alt="brands-logoes" />
            </div>
            <div className={homeCSS.brand}>
              <img src={brandsLogo05} alt="brands-logoes" />
            </div>
            <div className={homeCSS.brand}>
              <img src={brandsLogo06} alt="brands-logoes" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
