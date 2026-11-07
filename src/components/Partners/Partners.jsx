import React from "react";
import { motion } from "framer-motion";
import "./Partners.css";
import { containerVariants, textVariants } from "../../framerVariants";
import { useTranslation } from "react-i18next";

const Partners = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="partners-wrap"
      id="partners"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="partners-title" custom={0} variants={textVariants}>
        {t("partners.title")}
      </motion.div>
      <motion.div className="partners-imgs" custom={1} variants={textVariants}>
        <div className="partners"></div>
      </motion.div>
    </motion.div>
  );
};

export default Partners;
