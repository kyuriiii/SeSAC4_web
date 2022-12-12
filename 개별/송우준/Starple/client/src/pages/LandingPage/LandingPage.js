import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// fullpage library 설치
import "fullpage.js/vendors/scrolloverflow";
import "fullpage.js";
import "fullpage.js/dist/jquery.fullpage.min.css";
import $ from "jquery";
// scss import
import "./landingPage.scss";

import image from "../../assets/img/LandingPage/fullimage.png";
// first, second page
import FirstPage from "../../components/LandingPage/FirstPage/FirstPage";
import SecondPage from "../../components/LandingPage/SecondPage/SecondPage";
const LandingPage = () => {
  useEffect(() => {
    $(() => {
      $("#fullpage").fullpage({
        scrollOverflow: true,
        navigation: true,
        // scrollHorizontally: true,
        // showActiveTooltip: true,
        scrollingSpeed: 600,
        // fitToSection: true,
        // fitToSectionDelay: 1200,
        // 화면별 전환
        afterLoad: function (index, anchorLink) {
          if (anchorLink === 1) {
            // 화면별 넣고 싶은 이벤트
          } else if (anchorLink === 2) {
            // 화면별 넣고 싶은 이벤트
          } else if (anchorLink === 3) {
            // 화면별 넣고 싶은 이벤트
          }
        },
      });
    });
  }, []);

  return (
    <div id="fullpage">
      <img className="background" src={image} />
      <div className="section">
        <FirstPage />
      </div>
      <div className="section">
        <SecondPage />
      </div>
    </div>
  );
};

export default LandingPage;
