// src/components/Navigation/ToggleSwitch/ToggleSwitch.js
import React from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="toggle-switch">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="toggle-switch-checkbox"
        id={`toggle-switch`}
        type="checkbox"
      />
      <label className="toggle-switch-label" htmlFor={`toggle-switch`}>
        <span className={`toggle-switch-button`} />
      </label>
    </div>
  );
};

export default ToggleSwitch;
