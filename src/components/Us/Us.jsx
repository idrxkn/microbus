import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Us.css";
import block from "../../assets/block.png";
import driver from "../../assets/driver.png";
import camera from "../../assets/camera.png";
import money from "../../assets/money.png";
import conditioner from "../../assets/conditioner.png";
import gps from "../../assets/gps.png";
import map from "../../assets/mapicon.png";
import busicon from "../../assets/bus-icon.png";
import { containerVariants, textVariants } from "../../framerVariants";

const Us = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="us-wrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.p custom={0} variants={textVariants} className="why">
        {t("us.why")} <span className="us">{t("us.us")}</span>
      </motion.p>
      <div className="us-cards">
        <div className="us-row">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="us-col"
          >
            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={money}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card1.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card1.text")}
              </motion.p>
            </div>

            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={driver}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card2.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text"
              >
                {t("us.card2.text")}
              </motion.p>
            </div>

            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={camera}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card3.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card3.text")}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="us-col"
          >
            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={conditioner}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card4.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card4.text")}
              </motion.p>
            </div>

            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={gps}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card5.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card5.text")}
              </motion.p>
            </div>

            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={map}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card6.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card6.text")}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="us-col"
          >
            <div className="us-card">
              <motion.img
                custom={1}
                variants={textVariants}
                src={busicon}
                alt=""
                className="card-top-img"
                loading="lazy"
              />
              <motion.img
                custom={0}
                variants={textVariants}
                src={block}
                alt=""
                className="us-block"
                loading="lazy"
              />
              <motion.p
                custom={2}
                variants={textVariants}
                className="card-title"
              >
                {t("us.card7.title")}
              </motion.p>
              <motion.p
                custom={3}
                variants={textVariants}
                className="card-text cm"
              >
                {t("us.card7.text")}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Us;
