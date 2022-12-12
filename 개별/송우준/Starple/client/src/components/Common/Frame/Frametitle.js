import React from "react";
import "./frametitle.scss";
import Planet_name from "../Diary/Planet_name/Planet_name";
import IconButton from "@mui/material/IconButton";
import { FaPen } from "react-icons/fa";

// 데이터 전달 컴포넌트
import Category from "../Diary/Category/Category";
import MemberBox from "../Diary/MemberBox/MemberBox";

const Frame = ({ planetTitle, content }) => {
  return (
    <div className="frameBackWrapper">
      <div className="wrapper">
        <div className="top">
          <div className="planetName">
            <Planet_name title={planetTitle} />
          </div>
          <div className="titleWrapper">
            <Planet_name title={"2022"} />
            <IconButton>
              <FaPen />
            </IconButton>
          </div>
        </div>
        <div className="mainContainer">
          <div className="categoryWrapper">
            <div>
              <Category />
            </div>
            <div>
              <MemberBox />
            </div>
          </div>
          <div className="contentWrapper">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
