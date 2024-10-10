import React from "react";
import "../styles/ProjetoCard.css";

const ProjetoCard = ({ projeto }) => {
  return (
    <div className="projeto-card-container">
      <div className="projeto-card">
        <h3>{projeto.name}</h3>
        <div className="projeto-imagem">
          <img src={projeto.image} alt={projeto.name} />
        </div>
        <div className="projeto-habilidades">
          {projeto.skills.map((skill, index) => (
            <img
              key={index}
              src={skill.icon}
              alt={skill.name}
              className="skill-icon"
            />
          ))}
        </div>

        <div className="projeto-detalhes">
          <p>{projeto.description}</p>
          <div className="projeto-buttons">
            <div className="buttons">
              <button onClick={() => window.open(projeto.repoLink, "_blank")}>
                Ver Repositório
              </button>
            </div>
            <div className="buttons">
              <button
                onClick={() => window.open(projeto.projectLink, "_blank")}
              >
                Ver Projeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
