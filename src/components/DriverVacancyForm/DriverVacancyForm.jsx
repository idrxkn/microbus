import React, { useState } from "react";
import { motion } from "framer-motion";
import "./DriverVacancyForm.css";
import driver from "../../assets/driver.png";
import PhoneInput from "react-phone-input-2";
import { containerVariants, textVariants } from "../../framerVariants";
import { useTranslation } from "react-i18next";
import vcel from "../../assets/vacancy-el.svg";
import axios from "axios";

const DriverVacancyForm = () => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const ownBus = formData.get("ownBus");

    // Telegram API Integration
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const URI_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramMessage = `💼 <b>НОВАЯ ЗАЯВКА НА ВАКАНСИЮ!</b> 💼\n\n👤 <b>Имя:</b> ${name}\n📞 <b>Телефон:</b> +${phone}\n🚌 <b>Собственный автобус:</b> ${ownBus}\n\n<i>Каждый новый кандидат — это возможность для роста компании!</i> 🤝`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: telegramMessage,
      })
      .then((response) => {
        if (response.status === 200) {
          setSubmissionStatus("success");
        } else {
          setSubmissionStatus("error");
        }
        setIsSubmitted(true);
      })
      .catch(() => {
        setSubmissionStatus("error");
        setIsSubmitted(true);
      });
  };

  return (
    <div className="vacancy">
      <motion.div
        className="vacancy-form-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {isSubmitted ? (
          submissionStatus === "success" ? (
            <div className="success-message">
              <h2>{t("popup.successTitle")}</h2>
              <p>{t("popup.successMessage")}</p>
            </div>
          ) : (
            <div className="error-message">
              <h2>{t("popup.errorTitle")}</h2>
              <p>{t("popup.errorMessage")}</p>
            </div>
          )
        ) : (
          <>
            <motion.div
              className="vacancy-title"
              custom={1}
              variants={textVariants}
            >
              <img src={driver} alt="" />
              <h1 className="vacancy-form-title">{t("driverVacancy.title")}</h1>
            </motion.div>
            <motion.p
              className="vacancy-form-subtitle"
              custom={2}
              variants={textVariants}
            >
              {t("driverVacancy.subtitle")}
            </motion.p>
            <motion.form
              className="vacancy-form"
              custom={3}
              variants={textVariants}
              onSubmit={handleSubmit}
            >
              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="name">{t("driverVacancy.name")}:</label>
                <input type="text" id="name" name="name" />
              </motion.div>

              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="number">{t("driverVacancy.phone")} *</label>
                <PhoneInput
                  country={"kz"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  onlyCountries={["kz"]}
                  placeholder={"+7" ? " (___) ___ __ __" : "+7 (___) ___ __ __"}
                  className="phone-input"
                />
              </motion.div>

              <motion.div
                className="vacancy-form-group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <label htmlFor="ownBus">{t("driverVacancy.ownBus")}</label>
                <select id="ownBus" name="ownBus">
                  <option value="yes">{t("driverVacancy.yes")}</option>
                  <option value="no">{t("driverVacancy.no")}</option>
                </select>
              </motion.div>

              <motion.button
                type="submit"
                className="driver-submit-button"
                custom={4}
                variants={textVariants}
              >
                {t("driverVacancy.submit")}
              </motion.button>
            </motion.form>
          </>
        )}
      </motion.div>
      <motion.img
        src={vcel}
        alt="Background Element Vacancy"
        className="vc-el"
        initial="hidden"
        custom={1}
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      />
      <motion.img
        src={vcel}
        alt="Background Element Vacancy"
        className="vc-el2"
        initial="hidden"
        custom={2}
        whileInView="visible"
        viewport={{ once: true }}
        variants={textVariants}
      />
    </div>
  );
};

export default DriverVacancyForm;
