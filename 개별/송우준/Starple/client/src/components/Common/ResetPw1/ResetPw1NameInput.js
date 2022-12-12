import React from "react";
import "./ResetPw1NameInput.scss";

const ResetPw1NameInput = ({ value, onChange }) => {
  return (
    <>
      <div className="resetPw1NameInputContainer">
        <div className="nameInputTitle">Name</div>
        <input
          className="nameInput"
          onChange={onChange}
          value={value}
          placeholder={"홍길동"}
          type="text"
        ></input>
      </div>

      <div>
        {value ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default ResetPw1NameInput;
