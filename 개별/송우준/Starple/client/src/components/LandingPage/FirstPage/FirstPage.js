import React from "react";
import "./firstPage.scss";
import { ReactComponent as Header_Logo } from "../../../assets/img/LandingPage/logo_header.svg";
import Main_Logo from "../../../assets/img/LandingPage/logo_main.svg";

const FirstPage = () => {
  return (
    <div className="first_page_wrapper">
      <div className="first_page_header_logo_wrapper">
        <Header_Logo />
      </div>
      <div className="first_page_main_title_wrapper">
        <img src={Main_Logo} />
      </div>
      <div className="first_page_main_content_wrapper">
        <h1>우리 만의 우주</h1>
        <h1>우리만의 공간</h1>
        <p>공유 다이어리에 추억을 저장하세요.</p>
      </div>
    </div>
  );
};

export default FirstPage;
