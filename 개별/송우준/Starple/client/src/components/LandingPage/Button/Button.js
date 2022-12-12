import React from "react";
import "./button.scss";

const Button = ({ text, mode, value, onclick }) => {
  return (
    <div className="landing_btn_wrapper">
      <button
        className={"landing_btn " + (mode === "isRegister" ? "isRegister" : "")}
        value={value}
        onClick={onclick}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
