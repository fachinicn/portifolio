import React from "react";
import "../styles/CardHabilidade.css";

const CardHabilidade = ({ icon, name, altIcon }) => {
  return (
    <div>
      <div className="card">
        <h3>{name}</h3>
        <img src={icon} alt={altIcon} />
      </div>
    </div>
  );
};

export default CardHabilidade;
