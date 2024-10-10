import React from "react";
import ContatoButton from "./ContatoButton";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <section id="contato">
      <div className="footer" id="contato">
        <h3 className="title">Contato</h3>
        <div className="icones-contato">
          <ul>
            <div className="mail">
              <ContatoButton
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=candidofachini25@gmail.com"
                imgSrc="https://img.icons8.com/ios-filled/50/gmail.png"
                altText="mail"
              />
            </div>
            <div className="linkedin">
              <ContatoButton
                href="https://www.linkedin.com/in/candido-fachini-neto-927926235/"
                imgSrc="https://img.icons8.com/ios-filled/50/linkedin.png"
                altText="linkedin"
              />
            </div>
            <div className="github">
              <ContatoButton
                href="https://github.com/fachinicn"
                imgSrc="https://img.icons8.com/glyph-neue/64/github.png"
                altText="github"
              />
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
