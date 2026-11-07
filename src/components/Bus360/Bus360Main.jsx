import React from "react";
import Bus360 from "./Bus360";
import "./Bus360.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { containerVariants, textVariants } from "../../framerVariants";

const Bus360Main = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="bus360-main"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h1 className="bus360-title" custom={0} variants={textVariants}>
        {t("bus360.swing360")}
      </motion.h1>
      <Bus360 />
      <motion.div
        alt=""
        className="curve second"
        custom={1}
        variants={textVariants}
      ></motion.div>
    </motion.div>
  );
};

export default Bus360Main;
