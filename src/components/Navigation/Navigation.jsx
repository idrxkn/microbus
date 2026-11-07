import React, { useState, useRef, useEffect } from "react";
import "./Navigation.css";
import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";
import Dropdown from "./Dropdown/Dropdown";
import Phone from "./Phone/Phone";
import { useTranslation } from "react-i18next";

const Navigation = ({ isOpen, onClose, onRequestClick }) => {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState(
    () => localStorage.getItem("i18nextLng") || i18n.language
  );
  const navRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        onClose(); // Close the side menu
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose]);
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
    <header ref={navRef} className={`header side-menu ${isOpen ? "open" : ""}`}>
      <nav className="navigation">
        <div alt="Microbus Logo" className="logo" />
        <div className="nav-links">
          <a href="#about" className="nav-item" onClick={onClose}>
            {t("nav.aboutUs")}
          </a>
          <a href="#price" className="nav-item" onClick={onClose}>
            {t("nav.price")}
          </a>
          <a href="#partners" className="nav-item" onClick={onClose}>
            {t("nav.partners")}
          </a>
          <a href="#footer" className="nav-item" onClick={onClose}>
            {t("nav.contacts")}
          </a>
        </div>
        <div className="right-section-nav">
          <Phone />
          <button className="request-button" onClick={onRequestClick}>
            {t("nav.request")}
          </button>
          <div className="dropdown-nav">
            <Dropdown
              options={["EN", "KK", "RU"]}
              defaultOption={language.toUpperCase()}
              selectedLanguage={language}
              onChange={handleLanguageChange}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
