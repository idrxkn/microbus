// src/components/CarPark/CarPark.js
import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./CarPark.css";
import coaster24 from "../../assets/coaster24.png";
import county23 from "../../assets/county23.png";
import elantra from "../../assets/elantra.png";
import { containerVariants, textVariants } from "../../framerVariants";

const carData = [
  {
    name: "Toyota Coaster",
    year: "2024",
    description: "carDescription.coaster",
    image: coaster24,
  },
  {
    name: "Hyundai County",
    year: "2023",
    description: "carDescription.county",
    image: county23,
  },
  {
    name: "Toyota Coaster",
    year: "2023",
    description: "carDescription.coaster",
    image: coaster24,
  },
  {
    name: "Hyundai County",
    year: "2015",
    description: "carDescription.county",
    image: county23,
  },
  {
    name: "Toyota Coaster",
    year: "2015",
    description: "carDescription.coaster",
    image: coaster24,
  },
  {
    name: "Toyota Coaster",
    year: "2014",
    description: "carDescription.coaster",
    image: coaster24,
  },
];

const CarPark = () => {
  const { t } = useTranslation();

  return (
    <div className="car-park-container">
      <motion.div
        className="car-park"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.p custom={0} variants={textVariants} className="car-park-title">
          {t("carPark.title")}
        </motion.p>
        <motion.p
          custom={0}
          variants={textVariants}
          className="car-park-subtitle"
        >
          {t("carPark.subtitle")}
        </motion.p>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
        >
          {carData.map((car, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
                className="car-park-el"
              >
                <motion.div custom={1} variants={textVariants} className="car">
                  <div className="car-name">{car.name}</div>
                  <div className="car-year-container">
                    <hr />
                    <p className="car-year">
                      {car.year} {t("carPark.yearSuffix")}
                    </p>
                    <hr />
                  </div>
                  <div className="car-desc">{t(car.description)}</div>
                  <img src={car.image} alt={car.name} className="car-img" loading="lazy"
                  
                   />
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="car-park-el"
            >
              <motion.div custom={1} variants={textVariants} className="car">
                <div className="car-name">Hyundai Elantra</div>
                <div className="car-year-container">
                  <hr />
                  <p className="car-year">2019 {t("carPark.yearSuffix")}</p>
                  <hr />
                </div>
                <div className="car-desc">
                  {t("carDescription.elantra2019")}
                </div>
                <img
                  src={elantra}
                  alt="Hyundai Elantra"
                  className="car-img elantra"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
};

export default CarPark;
