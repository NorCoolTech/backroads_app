import React from "react";
import { pageLinks, sosicalLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {sosicalLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
