import React, { useState, useEffect } from "react";
import "./RequestPopup.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

const RequestPopup = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const [isClosing, setIsClosing] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      setIsSubmitted(false);
      setSubmissionStatus(null);
    }
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 400); // Match with the disappearing animation duration
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    // Telegram API Integration
    const CHAT_ID = import.meta.env.VITE_CHAT_ID;
    const BOT_TOKEN = import.meta.env.VITE_BOT_TOKEN;
    const URI_API = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const telegramMessage = `🚀 <b>НОВАЯ ЗАЯВКА!</b> 🚀\n\n👤 <b>Имя:</b> ${name}\n📞 <b>Телефон:</b> +${phone}\n\n💡Свяжитесь с клиентом как можно скорее.\n <i>"Вовремя принятое действие — залог успеха!"</i> `;

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
          console.log(response.status);
        }
        setIsSubmitted(true);
      })
      .catch(() => {
        setSubmissionStatus("error");
        setIsSubmitted(true);
      });
  };

  return (
    <div
      className={`popup-overlay ${isClosing ? "hidden" : ""}`}
      onClick={handleClose}
    >
      <button className="close-button" onClick={handleClose}>
        &times;
      </button>
      <div
        className={`popup-content ${isClosing ? "hidden" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {isSubmitted ? (
          submissionStatus === "success" ? (
            <div className="success-message">
              <h2>{t("popup.successTitle")}</h2>
              <p>{t("popup.successMessage")}</p>
              <button onClick={handleClose} className="close-button-success">
                {t("popup.close")}
              </button>
            </div>
          ) : (
            <div className="error-message">
              <h2>{t("popup.errorTitle")}</h2>
              <p>{t("popup.errorMessage")}</p>
              <button onClick={handleClose} className="close-button-error">
                {t("popup.close")}
              </button>
            </div>
          )
        ) : (
          <>
            <h2 className="popup-title">{t("popup.title")}</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{t("popup.name")}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Введите имя"
                />
              </div>
              <div className="form-group">
                <label htmlFor="tel">{t("popup.tel")}</label>
                <PhoneInput
                  country={"kz"}
                  value={phone}
                  onChange={(phone) => setPhone(phone)}
                  inputProps={{
                    name: "phone",
                    required: true,
                    autoFocus: false,
                  }}
                  onlyCountries={["kz"]}
                  placeholder={
                    phone === "+7" ? " (___) ___ __ __" : "+7 (___) ___ __ __"
                  }
                />
              </div>
              <button type="submit" className="submit-button">
                {t("popup.submit")}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default RequestPopup;
