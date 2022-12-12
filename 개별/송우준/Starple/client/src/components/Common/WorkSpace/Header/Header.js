import React from "react";
import "./header.scss";
import { ReactComponent as HeaderLogo } from "../../../../assets/img/WorkSpace/Header/WorkSpaceHeaderLogo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="workspaceHeaderWrapper">
      <div className="LogoWrapper">
        <HeaderLogo onClick={() => navigate("/workspace/main")} />
      </div>
      <div className="OptionWrapper">
        <ul>
          <li className="myplanet">
            <a
              className="myplanetBtn"
              onClick={() => navigate("/workspace/main")}
            >
              My planent
            </a>
          </li>
          <li>
            <a className="aboutusBtn" onClick={() => navigate("/aboutus")}>
              About us
            </a>
          </li>
          <li>
            <a className="contact" onClick={() => navigate("/contact")}>
              contact
            </a>
          </li>
          <li>
            <a onClick={() => alert("죄송합니다. 점검중입니다.")}>+pro</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
