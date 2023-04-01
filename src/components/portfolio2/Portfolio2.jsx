import React from "react";
import "./portfolio2.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Portfolio2 = () => {
  return (
    <section id="portfolio2">
      <h5>Lorem ipsum dolor sit amet.</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio2__container">
        <div className="portfolio2__left">
          <h3>Portfolio Left</h3>
          <div className="portfolio2__content">
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <h4>Lorem, ipsum dolor.</h4>
              <small className="text-light">Lorem, ipsum.</small>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
          </div>
        </div>

        <div className="portfolio2__right">
          <h3>Portfolio Right</h3>
          <div className="portfolio2__content">
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <h4>Lorem, ipsum dolor.</h4>
              <small className="text-light">Lorem, ipsum.</small>
            </article>
            <article className="portfolio2__details">
              <BsPatchCheckFill className="portfolio2__details-icon" />
              <div>
                <h4>Lorem, ipsum dolor.</h4>
                <small className="text-light">Lorem, ipsum.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio2;
