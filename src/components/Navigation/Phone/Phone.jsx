import React from "react";
import phone from "../../../assets/phone_icon.svg";
import "./Phone.css";
const Phone = () => {
  return (
    <a href="tel:+77066660201" className="phone">
      <div className="phone-icon"></div>
      <h1 className="number">+7 (706) 666 0201</h1>
    </a>
  );
};

export default Phone;
