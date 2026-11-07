import React, { useState, useEffect } from "react";
import "./Dropdown.css";

const Dropdown = ({ options, defaultOption, selectedLanguage, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setSelectedOption(selectedLanguage.toUpperCase());
  }, [selectedLanguage]);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption} <span className="dropdown-arrow">▼</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
