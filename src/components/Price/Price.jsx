import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Price.css";
import pricingcoaster23 from "../../assets/pricingbus-coaster2023.png";
import premium from "../../assets/premium.svg";
import comfort from "../../assets/comfort.svg";
import economy from "../../assets/economy.svg";
import RequestPopup from "../RequestPopup/RequestPopup"; // Import the popup component
import check from "../../assets/check.svg";
import { containerVariants, textVariants } from "../../framerVariants";

const Price = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { t } = useTranslation();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <motion.div
      className="price-wrap"
      id="price"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div custom={0} variants={textVariants} className="price-title">
        {t("price.title")}
      </motion.div>

      {/* Premium Block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pricing-block premium"
      >
        <motion.img
          src={premium}
          className="pricing-label premium"
          custom={0}
          variants={textVariants}
          loading="lazy"
        />
        <motion.div
          className="pricing-price"
          custom={1}
          variants={textVariants}
        >
          <span className="old-price">{t("price.premium.oldPrice")}</span>
          <span className="new-price">{t("price.premium.newPrice")}</span>
        </motion.div>

        <div className="pricing-content">
          <motion.img
            src={pricingcoaster23}
            alt="Bus"
            className="pricing-image"
            custom={2}
            variants={textVariants}
            loading="lazy"
          />
          <div className="pricing-details">
            <motion.h3 custom={3} variants={textVariants}>
              TOYOTA COASTER <span className="bus-years">2023, 2024</span>{" "}
              <br /> HYUNDAI COUNTY
              <span className="bus-years"> 2023</span>
            </motion.h3>
            <motion.ul custom={4} variants={textVariants}>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.premium.details.feature1")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.premium.details.feature2")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.premium.details.feature3")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.premium.details.feature4")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.premium.details.feature5")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.premium.details.feature6")}
              </li>
            </motion.ul>
            <motion.div className="hr-team" custom={5} variants={textVariants}>
              <hr />
              <hr /> <hr />
              <hr /> <hr />
              <hr /> <hr />
              <hr />
            </motion.div>
            <motion.button
              className="btn-book"
              onClick={togglePopup}
              custom={6}
              variants={textVariants}
            >
              {t("price.bookButton")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Comfort Block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pricing-block comfort"
      >
        <motion.img
          src={comfort}
          className="pricing-label comfort"
          custom={0}
          variants={textVariants}
        />
        <motion.div
          className="pricing-price"
          custom={1}
          variants={textVariants}
        >
          <span className="new-price">{t("price.comfort.newPrice")}</span>
        </motion.div>

        <div className="pricing-content">
          <motion.img
            src={pricingcoaster23}
            alt="Bus"
            className="pricing-image"
            custom={2}
            variants={textVariants}
          />
          <div className="pricing-details">
            <motion.h3 custom={3} variants={textVariants}>
              TOYOTA COASTER <span className="bus-years">2014, 2015</span>{" "}
              <br /> HYUNDAI COUNTY
              <span className="bus-years"> 2014, 2015</span>
            </motion.h3>
            <motion.ul custom={4} variants={textVariants}>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature1")}
              </li>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature2")}
              </li>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature3")}
              </li>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature4")}
              </li>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature5")}
              </li>
              <li>
                <img src={check} alt="" className="check" loading="lazy" />
                {t("price.comfort.details.feature6")}
              </li>
            </motion.ul>
            <motion.div className="hr-team" custom={5} variants={textVariants}>
              <hr />
              <hr /> <hr />
              <hr /> <hr />
              <hr />
              <hr />
            </motion.div>
            <motion.button
              className="btn-book"
              onClick={togglePopup}
              custom={6}
              variants={textVariants}
            >
              {t("price.bookButton")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Economy Block */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="pricing-block economy"
      >
        <motion.img
          src={economy}
          className="pricing-label economy"
          custom={0}
          variants={textVariants}
        />
        <motion.div
          className="pricing-price"
          custom={1}
          variants={textVariants}
        >
          <span className="new-price">{t("price.economy.newPrice")}</span>
        </motion.div>

        <div className="pricing-content">
          <motion.img
            src={pricingcoaster23}
            alt="Bus"
            className="pricing-image"
            custom={2}
            variants={textVariants}
          />
          <div className="pricing-details">
            <motion.h3 custom={3} variants={textVariants}>
              {t("price.economy.details.basicModels")}
            </motion.h3>
            <motion.ul custom={4} variants={textVariants}>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.economy.details.feature1")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.economy.details.feature2")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.economy.details.feature3")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.economy.details.feature4")}
              </li>
              <li>
                <img src={check} alt="" className="check" />
                {t("price.economy.details.feature5")}
              </li>
            </motion.ul>
            <motion.div className="hr-team" custom={5} variants={textVariants}>
              <hr />
              <hr /> <hr />
              <hr /> <hr />
              <hr />
              <hr />
            </motion.div>
            <motion.button
              className="btn-book economy"
              onClick={togglePopup}
              custom={6}
              variants={textVariants}
            >
              {t("price.bookButton")}
            </motion.button>
          </div>
        </div>
      </motion.div>

      <RequestPopup isOpen={isPopupOpen} onClose={togglePopup} />
    </motion.div>
  );
};

export default Price;
