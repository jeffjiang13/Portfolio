import React, { useState, useEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import LOGO from "../../assets/LOGO2.webp";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600); // Mobile breakpoint
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        {/* Flex container for logo and name */}
        <div className="name-logo-container">
          <img src={LOGO} className="logo" alt="logo" />
          <h1 className="name">{isMobile ? "Jeff J" : "Jeff Jiang"}</h1>
        </div>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
