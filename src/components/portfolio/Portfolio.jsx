import React from "react";
import IMG1 from "../../assets/react5.jpg";
import "./portfolio.css";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Lorem, ipsum.</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="react logo" />
          </div>
          <h3>Lorem, ipsum dolor.</h3>
          <div className="portfolio__item-cta">
            <a href="#" className="btn">
              Link 1
            </a>
            <a href="#" className="btn btn-primary" target="_blank">
              Link 2
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
