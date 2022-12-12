import React from "react";
import "./SignUpNameInput.scss";

const SignUpNameInput = ({ value, onChange }) => {
  return (
    <>
      <div className="signUpNameInputContainer">
        <div className="signUpNameInputTitle">Name</div>
        <input
          className="signUpNameInput"
          type="text"
          placeholder={"홍길동"}
          onChange={onChange}
          value={value}
        ></input>
      </div>
      <div>
        <div className="errorMessageWrap">{""}</div>
      </div>
    </>
  );
};

export default SignUpNameInput;
