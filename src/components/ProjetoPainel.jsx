import React from "react";
import ProjetoCard from "./ProjetoCard";
import "../styles/ProjetoPainel.css";

const projetosData = [
  {
    name: "Exame-E",
    image: "https://i.ibb.co/x5j4z7t/Exam-E.png",
    skills: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      },
    ],
    description:
      "Site que avalia resultado de exames laboratorias de sangue. O usuário assinala quais exames deseja verificar e insere os seus resultados, e com base em um banco de dados, é retornado para o usuário os valores de referência para os exames, indicando se está normal, acima do normal ou abaixo do normal.",
    repoLink: "https://github.com/fachinicn/exam-e",
    projectLink: "https://link-do-projeto1.com",
  },
];

const ProjetosPainel = () => {
  return (
    <div className="projetos-painel">
      {projetosData.map((projeto, index) => (
        <ProjetoCard key={index} projeto={projeto} />
      ))}
    </div>
  );
};

export default ProjetosPainel;
