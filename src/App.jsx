import React from "react";
import { useState } from "react";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Hamburger from "./components/Hamburger/Hamburger";
import HamburgerMenuContent from "./components/HamburgerMenuContent/HamburgerMenuContent";
import RequestPopup from "./components/RequestPopup/RequestPopup";

import "./i18n";
import i18n from "./i18n";
import "./fonts/fonts.css";
import Greeting from "./components/Greeting/Greeting";
import ExperienceBanner from "./components/ExperienceBanner/ExperienceBanner";
import CarPark from "./components/CarPark/CarPark";
import Bus360Main from "./components/Bus360/Bus360Main";
import Us from "./components/Us/Us";
import BusRoutes from "./components/BusRoutes/BusRoutes";
import Partners from "./components/Partners/Partners";
import Price from "./components/Price/Price";
import DriverVacancyForm from "./components/DriverVacancyForm/DriverVacancyForm";
import Questions from "./components/Questions/Questions";
import Footer from "./components/Footer/Footer";

import bg from "./assets/mesh-left.png";
import bg2 from "./assets/mesh-bg2.png";
import rightel1 from "./assets/right-el.png";
import rightel2 from "./assets/rightel2.png";
import leftel1 from "./assets/left-el.png";
import leftel2 from "./assets/leftel2.png";
import mainmesh from "./assets/mainmesh.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function App() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [language, setLanguage] = useState(i18n.language);
  const lang = i18n.language;
  const titles = {
    en: "Microbus - Passenger Transportation in Astana",
    ru: "Microbus - Перевозка пассажиров в Астане",
    kk: "Microbus - Астанада жолаушылар тасымалы",
  };

  const descriptions = {
    en: "Microbus - Passenger transportation services in Astana. Rent minibuses, buses, and vans for comfortable and reliable travel. Available in Kazakh, Russian, and English.",
    ru: "Microbus - Перевозка пассажиров в Астане. Аренда микроавтобусов, автобусов и автомобилей для комфортных и надежных поездок.",
    kk: "Microbus - Астанада жолаушылар тасымалы. Микроавтобустарды, автобустарды және көліктерді жалға алу - жайлы және сенімді сапарлар үшін.",
  };

  const metaTags = {
    en: {
      title: "Microbus - Passenger Transportation in Astana",
      description:
        "Reliable and affordable passenger transport services in Astana. Rent minibuses, buses, and vans for comfortable travel.",
      image: "",
      url: "https://microbus.kz",
    },
    ru: {
      title: "Microbus - Перевозка пассажиров в Астане",
      description:
        "Надежные и доступные услуги пассажирского транспорта в Астане. Аренда микроавтобусов, автобусов и автомобилей для комфортных поездок.",
      image: "",
      url: "https://microbus.kz",
    },
    kk: {
      title: "Microbus - Астанада жолаушылар тасымалы",
      description:
        "Астанадағы сенімді және қолжетімді жолаушылар тасымалы. Жайлы сапар үшін микроавтобустарды, автобустарды және көліктерді жалға алыңыз.",
      image: "",
      url: "https://microbus.kz",
    },
  };
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Microbus",
    description: metaTags[language].description,
    url: metaTags[language].url,
    telephone: "+7 706 666 0201",
    address: {
      "@type": "PostalAddress",
      streetAddress: "47 Syganak Street, Office 525",
      addressLocality: "Astana",
      postalCode: "010000",
      addressCountry: "KZ",
    },
    sameAs: [
      "https://www.instagram.com/microbus",
      "https://www.facebook.com/microbus",
    ],
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  // Animation variant for individual elements
  const elementVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5, // Smooth animation duration
      },
    },
  };
  const bgVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.3,
      y: 0,
      transition: {
        duration: 1.5, // Smooth animation duration
      },
    },
  };
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <title>{titles[language]}</title>
          <meta name="description" content={descriptions[language]} />
          <meta name="keywords" content={t("meta.keywords")} />
          <meta
            property="og:title"
            content="Microbus - Перевозка пассажиров в Астане"
          />
          <meta
            property="og:description"
            content="Надежные и доступные услуги пассажирского транспорта в Астане."
          />
          <meta
            property="og:image"
            content="https://darkhanb04.github.io/microbus/assets/preview.png"
          />
          <meta
            property="og:url"
            content="https://darkhanb04.github.io/microbus/"
          />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="ru_RU" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Microbus - Перевозка пассажиров в Астане"
          />
          <meta
            name="twitter:description"
            content="Надежные и доступные услуги пассажирского транспорта в Астане. Аренда микроавтобусов, автобусов и автомобилей для комфортных поездок."
          />
          <meta name="twitter:image" content="" />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        </Helmet>
        <HamburgerMenuContent
          onRequestClick={togglePopup}
          isOpen={isMenuOpen}
          onClick={toggleMenu}
        />

        <Navigation
          isOpen={isMenuOpen}
          onClose={closeMenu}
          onRequestClick={togglePopup}
        />
        <RequestPopup isOpen={isPopupOpen} onClose={togglePopup} />
        <Greeting />
        <ExperienceBanner />
        <BusRoutes />
        <Us />
        <CarPark />
        <Bus360Main />

        <Partners />
        <Price />
        <DriverVacancyForm />
        <Questions />
        <Footer />
        {/* Individual background elements with on-scroll animations */}
        <motion.img
          src={bg}
          alt="Background Element 1"
          className="bg-us1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          loading="lazy"
          variants={bgVariants} // Apply individual animation
        />
        <motion.img
          src={leftel1}
          alt="Left Element"
          className="bg-leftel1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elementVariants}
          loading="lazy"
        />
        <motion.img
          src={bg2}
          alt="Background Element 2"
          className="bg-us2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={bgVariants}
          loading="lazy"
        />
        <motion.img
          src={rightel1}
          alt="Right Element"
          className="bg-rightel1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elementVariants}
          loading="lazy"
        />
        <img src={mainmesh} alt="" className="main-mesh" />
        <motion.img
          src={bg}
          alt="Background Element 1"
          className="bg-us3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          loading="lazy"
          variants={bgVariants} // Apply individual animation
        />
        <motion.img
          src={leftel2}
          alt="Right Element"
          className="bg-leftel2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elementVariants}
          loading="lazy"
        />
        <motion.img
          src={bg}
          alt="Background Element 4"
          className="bg-us4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          loading="lazy"
          variants={bgVariants} // Apply individual animation
        />
        <div className="bg-leftel3-wrapper">
          {" "}
          <motion.img
            src={rightel1}
            alt="Left Element"
            className="bg-leftel3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={elementVariants}
            loading="lazy"
          />
        </div>
        <motion.img
          src={bg2}
          alt="Background Element 5"
          className="bg-us5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          loading="lazy"
          variants={bgVariants} // Apply individual animation
        />
        <motion.img
          src={rightel2}
          alt="Left Element"
          className="bg-rightel2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={elementVariants}
          loading="lazy"
        />
      </div>
    </HelmetProvider>
  );
}

export default App;
