import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <ul>
        <li>
          <button
            className="nav-button"
            onClick={() => scrollToSection("habilidades")}
          >
            Habilidades
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => scrollToSection("projetos")}
          >
            Projetos
          </button>
        </li>
        <li>
          <button
            className="nav-button"
            onClick={() => scrollToSection("contato")}
          >
            Contato
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
