import React from "react";
import "./ResetPw2PwInput1.scss";

const ResetPw2PwInput1 = ({ value, onChange }) => {
  return (
    <>
      <div className="resetPw2PwInput1Container">
        <div className="pw1InputTitle">PW</div>
        <input
          type="password"
          placeholder="영문, 숫자, 특수문자 포함 8자 이상"
          value={value}
          onChange={onChange}
          className="pw1Input"
          required
        ></input>
      </div>
    </>
  );
};

export default ResetPw2PwInput1;
