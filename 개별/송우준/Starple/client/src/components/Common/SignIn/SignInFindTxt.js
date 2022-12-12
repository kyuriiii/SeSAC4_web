import React from "react";
import "./SignInFindTxt.scss";
import { useNavigate } from "react-router-dom";
function SignInFindTxt() {
  const navigate = useNavigate();
  return (
    <div className="signInFindTxtContainer">
      <div className="signInFindTxtSection">
        <button className="findTxt" onClick={() => { navigate("/findid"); }} >
          아이디 찾기
        </button>
        <div className="findTxt">｜</div>
        <button className="findTxt" onClick={() => { navigate("/resetpw1"); }}        >
          비밀번호 재설정
        </button>
      </div>
    </div>
  );
}

export default SignInFindTxt;
