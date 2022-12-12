import React from "react";
import { useNavigate } from "react-router-dom";
import "./SuccessSignUpPage.scss";
import StarMap from "../../components/Common/StarMap/StarMap";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import SuccessSignUp from "../../components/Common/SuccessSignUp/SuccessSignUp";

const SuccessSignUpPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <StarMap />
      <div className="successSignUpLogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <SuccessSignUp />
    </div>
  );
};

export default SuccessSignUpPage;
