import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SignUpHeader from "../../components/Common/SignUp/SignUpHeader";
import SignUpIdInput from "../../components/Common/SignUp/SignUpIdInput";
import SignUpPwInput from "../../components/Common/SignUp/SignUpPwInput";
import SignUpNameInput from "../../components/Common/SignUp/SignUpNameInput";
import SignUpEmailInput from "../../components/Common/SignUp/SignUpEmailInput";
import SignUpBtn from "../../components/Common/SignUp/SignUpBtn";
import axios from "axios";

const SignUpPage = memo(() => {
  const [userID, setuserID] = useState("");
  const [hashedPW, setPW] = useState("");
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const navigate = useNavigate();

  const handleForm = () => {
    axios({
      method: "post",
      url: process.env.REACT_APP_URL + "/api/auth/signup",
      header: { withCredentials: true },
      data: {
        userID: userID,
        hashedPW: hashedPW,
        email: email,
        username: username,
      },
    })
      .then((res) => console.log(res.data))
      .then(() => {
        navigate("/welcome");
      })
      .catch((err) => {
        console.log("An error occurred:", err);
        alert("이미 있는 사용자입니다!");
      });
  };

  return (
    <div>
      <StarMap />
      <div className="signUpLogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="signUpWrapper">
        <div className="signUpSection">
          <div className="signUp">
            <SignUpHeader text={"회원가입"} />
            <SignUpIdInput
              value={userID}
              onChange={(e) => {
                setuserID(e.target.value);
                console.log(e.target.value);
              }}
            />
            <SignUpPwInput
              value={hashedPW}
              onChange={(e) => {
                setPW(e.target.value);
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
            <SignUpBtn onClick={handleForm} text={"회원가입"} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default SignUpPage;
