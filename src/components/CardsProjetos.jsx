import React from "react";
import "../styles/CardsProjetos.css";

const CardsProjetos = ({
  name,
  skill1,
  skill2,
  skill3,
  skill4,
  link,
  repo,
}) => {
  return (
    <div>
      <div className="card">
        <h3>{name}</h3>
        <p>{skill1}</p>
        <p>{skill2}</p>
        <p>{skill3}</p>
        <p>{skill4}</p>
        <button
          className="projeto-button"
          onClick={(e) => {
            e.preventDefault();
            window.open({ link }, "_blank");
          }}
        >
          Ver projeto
        </button>
      </div>
    </div>
  );
};

export default CardsProjetos;
