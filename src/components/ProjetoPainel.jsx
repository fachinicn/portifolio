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
    description: "EM DESENVOLVIMENTO",
    repoLink: "https://github.com/fachinicn/exam-e",
    projectLink: "https://exam-e-ten.vercel.app",
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
