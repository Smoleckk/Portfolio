import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/business.png";
import IMG2 from "../../assets/safenotes.png";
import IMG3 from "../../assets/outget.png";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="Portfolio" />
          </div>
          <h3>Management System - run your business easier</h3>
          <a
            href="https://github.com/Smoleckk/CompanyManagement"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="Portfolio" />
          </div>
          <h3>OutGet - delivery system</h3>
          <a
            href="https://github.com/Smoleckk/OutGet"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="Portfolio" />
          </div>
          <h3>SafeNotes - keep notes security </h3>
          <a
            href="https://github.com/Smoleckk/SafeNotes"
            target="_blank"
            className="btn"
          >
            Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
