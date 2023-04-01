import React from "react";
import { icons } from "react-icons";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/" targets="_blank">
        <BsLinkedin />
      </a>
      <a href="https://www.github.com/" targets="_blank">
        <BsGithub />
      </a>
      <a href="https://www.twitter.com/" targets="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
