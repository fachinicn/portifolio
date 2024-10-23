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
  {
    name: "Página de contato",
    image: "https://i.ibb.co/BTnQk3S/MY-MEDS.png",
    skills: [
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg",
      },
    ],
    description:
      "Simples página de contato, onde o foco é a prática de HTML e CSS. Utiliza-se de elementos forms para obter as informações de contato e possui recusrividade para dispositivos mobile.",
    repoLink: "https://github.com/fachinicn/contato",
    projectLink: "https://fachinicn.github.io/contato/",
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
