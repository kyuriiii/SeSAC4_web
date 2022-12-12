import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import SignInFindTxt from "../../components/Common/SignIn/SignInFindTxt";
import SignInInput from "../../components/Common/SignIn/SignInInput";
import SignInHeader from "../../components/Common/SignIn/SignInHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SocialBtn from "../../components/Common/SignIn/SocialBtn";
import Naver_Btn from "../../assets/img/LoginBtn/naverBtn.png";
import Kakao_Btn from "../../assets/img/LoginBtn/kakaoBtn.png";
import Google_Btn from "../../assets/img/LoginBtn/googleBtn.png";
import Github_Btn from "../../assets/img/LoginBtn/githubBtn.png";
import "./LoginPage.scss";
import axios from "axios";
// mobx
import { observer } from "mobx-react";
import { toJS } from "mobx";
import store from "../../store";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

const LoginPage = observer(() => {
  const { userClass } = store;

  const [userID, setuserId] = useState("");
  const [hashedPW, setPw] = useState("");
  const navigate = useNavigate();

  const handleLogin = useCallback((e) => {
    if (userID === "" || hashedPW === "") {
      alert("아이디와 비밀번호를 입력해주세요");
      return;
    }
    axios({
      method: "post",
      url: process.env.REACT_APP_URL + "/api/auth/login",
      header: { withCredentials: true },
      data: { userID: userID, hashedPW: hashedPW },
    })
      .then((res) => {
        const { result, userInfo, token } = res.data;
        console.log("result:", result);
        console.log("userInfo:", userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        userClass.setUserInfo(JSON.stringify(userInfo));
        localStorage.setItem("token", token);
      })
      .then(() => {
        navigate("/workspace/main");
      })
      .catch((err) => console.log(err.response.data));
  });
  return (
    <div>
      <StarMap />
      <div>
        <div className="signUpLogoWrapper">
          <img
            src={Main_Logo}
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div className="signInWrapper">
          <div className="signInSection">
            <div className="signIn">
              <SignInHeader text={"로그인"} />
              <SignInInput
                type={"text"}
                text={<FontAwesomeIcon icon={faUser} />}
                value={userID}
                setData={setuserId}
                placeholder={"아이디"}
              />
              <SignInInput
                type={"password"}
                text={<FontAwesomeIcon icon={faKey} />}
                value={hashedPW}
                placeholder={"비밀번호"}
                setData={setPw}
              />
              <div>
                <SignInFindTxt />
              </div>

              <a className="loginBtn" onClick={handleLogin}>
                <span />
                <span />
                <span />
                <span />
                START
              </a>

              <div className="socialBtn">
                <SocialBtn
                  src={Naver_Btn}
                  href={process.env.REACT_APP_URL + "/api/auth/naver"}
                />
                <SocialBtn
                  src={Kakao_Btn}
                  href={process.env.REACT_APP_URL + "/api/auth/kakao"}
                />
                <SocialBtn
                  src={Google_Btn}
                  href={process.env.REACT_APP_URL + "/api/auth/google"}
                />
                <SocialBtn
                  src={Github_Btn}
                  href={process.env.REACT_APP_URL + "/api/auth/github"}
                />
              </div>
            </div>
          </div>

          <div className="signInBottom">
            <div>STARPL에 처음이신가요?</div>
            <span onClick={() => navigate("/register")}>회원가입</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default LoginPage;
