import React, { useState } from "react";
import "./BusRoutes.css";
import cityright from "../../assets/city-routes-right.png";
import intercityright from "../../assets/intercity-routes-right.png";
import RequestPopup from "../RequestPopup/RequestPopup"; // Import the popup component
import { containerVariants, textVariants } from "../../framerVariants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const BusRoutes = () => {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <motion.div
      className="bus-routes"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="routes">
        <motion.div
          className="city-routes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="city-routes-left"
            custom={0}
            variants={textVariants}
          >
            <div className="city-routes-title">{t("routes.city.title")}</div>
            <img src={cityright} alt="" className="routes-img mobile" />
            <div className="city-routes-desc">
              {t("routes.city.description")}
            </div>
            <div className="city-routes-desc-bottom">
              {t("routes.city.bottomText", { count: 10000 })}
            </div>
            <button className="city-routes-btn" onClick={togglePopup}>
              {t("routes.apply")}
            </button>
          </motion.div>
          <motion.div
            className="city-routes-right"
            custom={1}
            variants={textVariants}
          >
            <img src={cityright} alt="" className="routes-img" />
          </motion.div>
        </motion.div>
        <motion.div
          className="city-routes"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="city-routes-left"
            custom={0}
            variants={textVariants}
          >
            <div className="city-routes-title inter">
              {t("routes.intercity.title")}
            </div>
            <img src={intercityright} alt="" className="routes-img mobile" />
            <div className="city-routes-desc inter">
              {t("routes.intercity.description")}
            </div>
            <div className="city-routes-desc-bottom">
              {t("routes.intercity.bottomText")}
            </div>
            <button className="city-routes-btn" onClick={togglePopup}>
              {t("routes.apply")}
            </button>
          </motion.div>
          <motion.div
            className="city-routes-right"
            custom={1}
            variants={textVariants}
          >
            <img src={intercityright} alt="" className="routes-img" />
          </motion.div>
        </motion.div>
      </div>
      <RequestPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </motion.div>
  );
};

export default BusRoutes;
