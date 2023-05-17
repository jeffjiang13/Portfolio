import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
// import { FiDribbble } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jeffjiang13/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href='https://www.facebook.com/jeff.jiang.9/'  target="_blank" rel="noreferrer" ><FaFacebookF /></a>
      <a href="https://github.com/jeffjiang13/" target="_blank" rel="noreferrer" ><FaGithub /></a>

      {/* <a href="https://dribbble.com" target="_blank">
        <FiDribbble />
      </a> */}
    </div>
  );
};

export default HeaderSocials;
