import React from "react";
import { FooterContainer, CopyrightMessage } from "./FooterComps";

const Footer = () => {
  return (
    <FooterContainer>
      <div
        className="column-container"
        style={{ padding: "0", justifyContent: "space-evenly" }}
      >
        <CopyrightMessage>{"\u00A9"} ShapeLAB 2021</CopyrightMessage>
        <div className="row-container">
          <a
            className="footer-links"
            href="http://www.washington.edu/online/privacy"
          >
            Privacy
          </a>
          <a
            className="footer-links"
            href="http://www.washington.edu/online/terms"
          >
            Terms
          </a>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
