import React from "react";
import "./about.css";
// import ME from "../../assets/me3.jpg";
import ME from "../../assets/me-about2.jpg";

import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ month</small>
            </article>
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>3rd year of computer science</small>
            </article>
            {/* <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>7+ month</small>
            </article> */}
          </div>
          <p>
            I am a young programmer, currently studying at Warsaw University of
            Technology. I have some professional experience, but I am constantly
            developing my skills by studying independently and working on
            projects outside of my studies. I am determined to continuously
            improve and expand my knowledge in order to become an even better
            programmer. I am interested in new technologies and ready to take on
            challenges that will allow me to grow and develop my projects.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
