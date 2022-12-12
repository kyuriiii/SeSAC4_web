import React, { useState } from "react";
import "./SignUpEmailInput.scss";

const SignUpEmailInput = ({ value, onChange }) => {
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
      <div className="signUpEmailInputContainer">
        <div className="signUpEmailInputTitle">E-mail</div>
        <input
          className="signUpEmailInput"
          type="text"
          placeholder="test@email.com"
          value={value}
          onChange={(handleEmail, onChange)}
        ></input>
      </div>
      <div>
        {!emailValid && email.length > 0 ? (
          <div className="errorMessageWrap">올바른 이메일을 입력해주세요.</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default SignUpEmailInput;
