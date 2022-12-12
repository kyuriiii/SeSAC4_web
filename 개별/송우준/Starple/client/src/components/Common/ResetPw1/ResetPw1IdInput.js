import React, { useState } from "react";
import "./ResetPw1IdInput.scss";

const ResetPw1IdInput = ({ value, onChange }) => {
  return (
    <>
      <div className="resetPw1IdInputContainer">
        <div className="idInputTitle">ID</div>
        <input
          className="idInput"
          placeholder="아이디를 입력해주세요"
          value={value}
          onChange={onChange}
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

export default ResetPw1IdInput;
