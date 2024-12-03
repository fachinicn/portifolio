import React, { useState } from "react";
import "../styles/AboutMe.css";
import Foto from "../assets/Foto.png";

const AboutMe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePanel = () => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      setIsOpen(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isAnimating) {
      setIsOpen(false);
      setIsAnimating(false);
    }
  };

  return (
    <div className="about-container">
      {isOpen || isAnimating ? (
        <div
          className={`profile-panel ${isAnimating ? "exit" : "enter"}`}
          onAnimationEnd={handleAnimationEnd}
        >
          <button className="close-button" onClick={togglePanel}>
            X
          </button>
          <a
            href="https://github.com/fachinicn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={Foto}
              alt="Foto de Perfil"
              className="profile-image"
              href="https://github.com/fachinicn"
            />
          </a>
          <div className="container-button">
            <button
              className="sobre-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://drive.google.com/file/d/1t-Uta_MSfJkObJAEq0ogPdS16bwEuVeU/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Baixar Currículo
            </button>
            <button
              className="sobre-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=candidofachini25@gmail.com"
                );
              }}
            >
              Entrar em contato
            </button>
          </div>
        </div>
      ) : (
        <button className="info-button" onClick={togglePanel}>
          Saiba Mais
        </button>
      )}
    </div>
  );
};

export default AboutMe;
