// src/components/Greeting/Greeting.js
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import BusAnimation from "./Model/BusAnimation";
import "./Greeting.css";
import { useTranslation } from "react-i18next";
import { containerVariants, textVariants } from "../../framerVariants";
import RequestPopup from "../RequestPopup/RequestPopup"; // Import the popup component

const Greeting = () => {
  const { t } = useTranslation();
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  const words = [
    t("greeting.dynamic1"), // "FOR CITY TOURS"
    t("greeting.dynamic2"), // "FOR INTERCITY TRIPS"
    t("greeting.dynamic3"), // "FOR CORPORATE EVENTS"
  ];

  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseDuration = 1000;

  useEffect(() => {
    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        if (charIndex > 0) {
          setDisplayedText(currentWord.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        if (charIndex < currentWord.length) {
          setDisplayedText(currentWord.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    if (startTyping) {
      const timeout = setTimeout(
        typeWriter,
        isDeleting ? deletingSpeed : typingSpeed
      );
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, wordIndex, startTyping, words]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setStartTyping(true);
    }, 500);
    return () => clearTimeout(initialDelay);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <motion.div
      className="greeting-part"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="greeting-left">
        <div className="title">
          <span>{t("greeting.staticPart")} </span>
          <span className="dynamic-text">{displayedText}</span>
        </div>
        <motion.div custom={0} variants={textVariants} className="subtitle">
          {t("greeting.choose")}
        </motion.div>
      </div>
      <div className="greeting-right">
        <motion.div custom={2} variants={textVariants}>
          <BusAnimation />
        </motion.div>
      </div>
      <motion.div
        className="discount"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
        custom={1}
        onClick={togglePopup}
      >
        <h1 className="discount-text">{t("greeting.discountFirst")}</h1>
        <span className="percent">10%</span>
        <h1 className="discount-text second">{t("greeting.discountSecond")}</h1>
      </motion.div>
      <RequestPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </motion.div>
  );
};

export default Greeting;
