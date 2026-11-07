import React from "react";
import "./PhoneHamburger.css";
const Phone = () => {
  return (
    <a href="tel:+77066660201" className="phone-hamburger">
      <div className="phone-icon"></div>
      <h1 className="number">+7 (706) 666 0201</h1>
    </a>
  );
};

export default Phone;
