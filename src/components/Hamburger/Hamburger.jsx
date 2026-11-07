import React from "react";
import "./Hamburger.css";

const Hamburger = ({ isOpen, onClick }) => {
  return (
    <button
      className={`hamburger ${isOpen ? "active" : ""}`}
      onClick={(e) => {
        e.stopPropagation(); // Prevent click propagation to document
        onClick();
      }}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default Hamburger;
