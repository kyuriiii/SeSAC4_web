import React from "react";
import { useNavigate } from "react-router-dom";
import "./secondPage.scss";
import { ReactComponent as Logo } from "../../../assets/img/LandingPage/second_page_logo.svg";
import Button from "../Button/Button";

import { Link } from "react-router-dom";

const SecondPage = () => {
  const navigate = useNavigate();

  return (
    <div className="second_page_wrapper">
      <div className="second_page_content_wrapper">
        <div className="second_page_text_wrapper">
          <h2>우리의 추억을 담은 별</h2>
          <div className="second_page_img_wrapper">
            <Logo />
          </div>
          <p>
            친구, 가족들과의 추억을 기록하고 공유하고 싶지 않으셨나요 <br />
            우리만의 별에 기록하고 싶은 추억을 남기고 마음껏 꾸며보세요?
          </p>
        </div>
        <div className="second_page_btn_wrapper">
          <Link to={"/login"}>
            <Button text={"로그인"} />
          </Link>
          <Link to={"/register"}>
            <Button text={"회원가입"} mode={"isRegister"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
