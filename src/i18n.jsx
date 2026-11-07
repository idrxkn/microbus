import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en.json";
import kk from "./locales/kk.json";
import ru from "./locales/ru.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      resources: {
        en: { translation: en },
        kk: { translation: kk },
        ru: { translation: ru },
      },
      fallbackLng: "en",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
      detection: {
        order: [
          "localStorage",
          "querystring",
          "cookie",
          "navigator",
          "htmlTag",
        ],
        caches: [], // Disable caching to localStorage initially
      },
      debug: true, // Enable debug mode to see logs
    },
    (err, t) => {
      if (err) console.error("i18n init failed", err);
      // Set the language based on the browser if not saved in local storage
      const browserLang = navigator.language.split("-")[0];
      if (
        !localStorage.getItem("i18nextLng") &&
        ["en", "kk", "ru"].includes(browserLang)
      ) {
        i18n.changeLanguage(browserLang);
      }
    }
  );

export default i18n;
