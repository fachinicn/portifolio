import React from "react";
import CardHabilidade from "./CardHabilidade";
import "../styles/Habilidades.css";

const Habilidades = () => {
  return (
    <section id="habilidades">
      <div className="habilidades-container">
        <div className="title">
          <p>Habilidades</p>
          <div className="cards">
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
              }
              name={"HTML"}
              altIcon={"HTML-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg"
              }
              name={"CSS"}
              altIcon={"CSS-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"
              }
              name={"Javascript"}
              altIcon={"Javascript-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
              }
              name={"React"}
              altIcon={"React-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg"
              }
              name={"Vue"}
              altIcon={"Vue-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
              }
              name={"Tailwind CSS"}
              altIcon={"Tailwind-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              }
              name={"Git"}
              altIcon={"Git-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
              }
              name={"Node.js"}
              altIcon={"nodejs-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
              }
              name={"C++"}
              altIcon={"Cpp-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              }
              name={"Python"}
              altIcon={"Python-logo"}
            />
            <CardHabilidade
              icon={
                "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
              }
              name={"MySQL"}
              altIcon={"MySQL-logo"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Habilidades;
