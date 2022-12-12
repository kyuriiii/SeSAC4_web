import React from "react";
import "./ModifyInput.scss";
export default function ModifyInput({ text, type, value, onChange, disabled }) {
  return (
    <div className="modifyInputContainer">
      <div className="modifyInputTitle">{text}</div>
      <input
        className="modifyInput"
        type={type}
        value={value}
        onChange={onChange}
        disabled={disabled}
      ></input>
    </div>
  );
}
