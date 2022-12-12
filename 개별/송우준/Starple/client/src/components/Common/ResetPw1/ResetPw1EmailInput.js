import React, { useState } from "react";
import "./ResetPw1EmailInput.scss";
const ResetEmailInput = ({ value, onChange }) => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  return (
    <>
      <div className="resetPw1EmailInputContainer">
        <div className="emailInputTitle">E-mail</div>
        <input
          className="emailInput"
          type="text"
          placeholder="test@email.com"
          value={value}
          onChange={onChange}
        ></input>
      </div>
      <div>
        {!emailValid && email.length > 0 ? (
          <div className="errorMessageWrap">잘못된 이메일 형식입니다.</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default ResetEmailInput;
