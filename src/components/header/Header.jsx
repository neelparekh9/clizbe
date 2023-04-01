import React from "react";
import CTA from "./CTA";
import "./header.css";
import FRONT from "../../assets/front-pic7.png";
import FRONT2 from "../../assets/react6.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className=".container header__container">
        <h5 className="text-primary">Lorem, ipsum dolor.</h5>
        <h1>David Clizbe</h1>
        <h5 className="text-light">Lorem ipsum dolor sit.</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={FRONT2} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll down
        </a>
      </div>
    </header>
  );
};

export default Header;
