import React, { useState } from "react";
import "./SignUpIdInput.scss";

const SignUpIdInput = ({ value, onChange }) => {
  const [userID, setuserID] = useState("");
  const [idValid, setIdValid] = useState(false);

  const handleId = (e) => {
    setuserID(e.target.value);
    const regex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{3,20}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  return (
    <>
      <div className="signUpIdInputContainer">
        <div className="signUpIdInputTitle">ID</div>
        <input
          className="signUpIdInput"
          placeholder="사용하실 아이디를 입력해주세요"
          value={value}
          onChange={(handleId, onChange)}
          type="text"
        ></input>
      </div>
      <div>
        {value || value == "" ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">
            중복된 아이디 입니다. 다른 아이디를 입력해주세요.
          </div>
        )}
      </div>
    </>
  );
};

export default SignUpIdInput;
