import React from "react";
import "./about.css";
import AVATAR from "../../assets/avatar1.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { icons } from "react-icons";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Project</h2>

      <div className="container about__container">
        <div className="about__project">
          <div className="about__project-image">
            <img src={AVATAR} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Lorem, ipsum dolor.</h5>
              <small>Lorem, ipsum.</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Lorem, ipsum dolor.</h5>
              <small>Lorem, ipsum.</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Lorem, ipsum dolor.</h5>
              <small>Lorem, ipsum.</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            voluptates pariatur in obcaecati iure rerum beatae eveniet tempora
            ipsa rem dolorem vel fugit ad, necessitatibus distinctio temporibus.
            Velit, impedit. Quod?
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
