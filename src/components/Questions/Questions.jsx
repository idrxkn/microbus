import React from "react";
import { motion } from "framer-motion";
import "./Questions.css";
import { containerVariants, textVariants } from "../../framerVariants";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="questions-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div
        className="curve third"
        custom={0}
        variants={textVariants}
      ></motion.div>
      <motion.div
        className="ask-question"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.div
          className="ask-question-title"
          custom={0}
          variants={textVariants}
        >
          {t("questions.title")}
        </motion.div>
        <a href="https://wa.me/message/JF2BEDNQGTPAA1" className="ask-btn-a">
          {" "}
          <motion.button
            className="ask-question-btn"
            custom={1}
            variants={textVariants}
          >
            {t("questions.button")}
          </motion.button>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Questions;
