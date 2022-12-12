import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="workspaceFooterWrapper">
      <div className="btnContainer">
        <ul>
          <li>
            <a href="#">상태</a>
          </li>
          <li>
            <a href="#">개인 정보 보호</a>
          </li>
          <li>
            <a href="#">약관</a>
          </li>
          <li>
            <a href="#">문의하기</a>{" "}
          </li>
        </ul>
      </div>
      <div className="text">
        ©2022 Starpl, LLC, a Salesforce company. All rights reserved. 각 상표는 해당
        소유자의 소유입니다.
      </div>
    </div>
  );
};

export default Footer;
