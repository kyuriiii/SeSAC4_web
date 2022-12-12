import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPw1Page.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import ResetPw1Btn from "../../components/Common/ResetPw1/ResetPw1Btn";
import SignUpIdInput from "../../components/Common/SignUp/SignUpIdInput";
import SignUpNameInput from "../../components/Common/SignUp/SignUpNameInput";
import SignUpEmailInput from "../../components/Common/SignUp/SignUpEmailInput";
import axios from "axios";

const ResetPw1Page = () => {
  const [userID, setuserID] = useState("");
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    axios({
      method: "post",
      url: process.env.REACT_APP_URL + "/api/auth/resetPW1",
      header: { withCredentials: true },
      data: { userID: userID, username: username, email: email },
    })
      .then((res) => {
        console.log(res.data);
        alert("비밀번호를 재설정해주세요");
        const uid = res.data.uid;
        navigate(`/resetpw2/${uid}`);
      })
      .catch((err) => {
        console.log("An error occurred:", err);
        alert("사용자를 찾을 수 없습니다");
      });
  };
  return (
    <>
      <StarMap />
      <div className="resetPw1LogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="resetPw1Wrapper">
        <div className="resetPw1Section">
          <div className="resetPw1HeaderBox">
            <div className="resetPw1Header">비밀번호 재설정</div>
          </div>
          <div className="resetPw1Text">새로운 비밀번호로 변경해드립니다.</div>
          <div className="resetPw1Text">
            회원가입시 기재하셨던 정보를 입력해주세요.
          </div>
          <SignUpIdInput
            value={userID}
            onChange={(e) => {
              setuserID(e.target.value);
              console.log(e.target.value);
            }}
          />
          <SignUpNameInput
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
              console.log(e.target.value);
            }}
          />
          <SignUpEmailInput
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw1Btn text={"비밀번호 재설정"} onClick={handleForm} />
        </div>
      </div>
    </>
  );
};

export default ResetPw1Page;
