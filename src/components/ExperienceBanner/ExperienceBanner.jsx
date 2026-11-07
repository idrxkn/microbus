// src/components/ExperienceBanner/ExperienceBanner.js
import React from "react";
import { motion } from "framer-motion";
import "./ExperienceBanner.css";
import fifteen from "../../assets/fifteen.png";
import { useTranslation } from "react-i18next";
import { containerVariants, textVariants } from "../../framerVariants";

const ExperienceBanner = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="experience-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div custom={0} variants={textVariants} className="experience-top">
        <p className="experience-first">{t("experience.first")}</p>
        <img src={fifteen} alt="" className="fifteen" loading="lazy" />
        <p className="experience-second">{t("experience.second")}</p>
      </motion.div>
      <motion.p custom={1} variants={textVariants} className="experience-third">
        {t("experience.third")}
      </motion.p>
      <motion.div
        custom={2}
        variants={textVariants}
        alt=""
        className="curve first"
      ></motion.div>
    </motion.div>
  );
};

export default ExperienceBanner;
