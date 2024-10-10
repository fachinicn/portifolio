import React from "react";
import PropTypes from "prop-types";
import "../styles/ContatoButton.css";

const ContatoButton = ({ href, imgSrc, altText }) => {
  return (
    <li className="icone">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <img src={imgSrc} alt={altText} />
      </a>
    </li>
  );
};

ContatoButton.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ContatoButton;
