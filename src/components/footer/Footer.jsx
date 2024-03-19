import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
// import { FiInstagram } from "react-icons/fi";
// import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import LOGO from "../../assets/LOGO2.webp";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  return (
    <footer>
      <div className="footer__brand">
      <a href="#"><img src={LOGO} className="footerlogo" alt="logo" /></a>
       <h1><a href="#" className="footer__logo">Jeff Jiang</a></h1>
      </div>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#video">Videos</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        {/* <a href='https://instagram.com'><FiInstagram /></a>
        <a href='https://twitter.com'><IoLogoTwitter /></a> */}
        <a
          href="https://www.linkedin.com/in/jeffjiang13/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/jeff.jiang.9/">
          <FaFacebookF target="_blank" rel="noreferrer" />
        </a>
        <a
          href="https://github.com/jeffjiang13/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JJ {getYear()}. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
