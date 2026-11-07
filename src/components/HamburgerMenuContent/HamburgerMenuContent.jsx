import React from "react";
import { useState, useEffect } from "react";
import PhoneHamburger from "./PhoneHamburger";
import Dropdown from "../Navigation/Dropdown/Dropdown";
import Hamburger from "../Hamburger/Hamburger";
import { useTranslation } from "react-i18next";
import "./HamburgerMenuContent.css";

const HamburgerMenuContent = ({ isOpen, onClick }) => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(
    () => localStorage.getItem("i18nextLng") || i18n.language
  );
  useEffect(() => {
    document.body.classList.add(`lang-${language}`);
  }, [language]);
  useEffect(() => {
    if (i18n.language !== language) setLanguage(i18n.language);
    document.body.classList.remove("lang-en", "lang-kk", "lang-ru");
    document.body.classList.add(`lang-${i18n.language}`);
  }, [i18n.language]);
  const handleLanguageChange = (selectedLanguage) => {
    i18n.changeLanguage(selectedLanguage.toLowerCase());
    localStorage.setItem("i18nextLng", selectedLanguage.toLowerCase());
  };

  return (
    <div className="hamburger-menu-content">
      <div className="logo" alt="Microbus Logo" />
      <PhoneHamburger />
      <Dropdown
        options={["EN", "KK", "RU"]}
        defaultOption={language.toUpperCase()}
        selectedLanguage={language}
        onChange={handleLanguageChange}
      />

      <Hamburger isOpen={isOpen} onClick={onClick} />
    </div>
  );
};

export default HamburgerMenuContent;
