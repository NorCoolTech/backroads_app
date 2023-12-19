import React, { useState } from "react";
import logo from "../images/logo.svg";
import { sosicalLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  // Check window width on each render
  const checkWindowWidth = () => {
    if (window.innerWidth > 992 && toggle) {
      setToggle(false);
    }
  };

  // Attach the checkWindowWidth function to resize event
  window.onresize = checkWindowWidth;

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            onClick={handleToggle}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks
          parentClass={`nav-links ${toggle ? "show-links" : ""}`}
          itemClass="nav-link"
        />

        <ul className="nav-icons">
          {sosicalLinks.map((link) => (
            <SocialLink key={link.id} {...link} itemClass="nav-icon" />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
