import React from "react";
import "./AboutUsBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AboutUsBtn({ text1, text2, text3, icon }) {
  return (
    <div className="aboutUsBtnBox">
      <div className="aboutUsBtn">
        <FontAwesomeIcon className="aboutUsBtnIcon" icon={icon} />
        <div className="aboutUsBtnText1">{text1}</div>
        <div className="aboutUsBtnText2">{text2}</div>
        <div className="aboutUsBtnText3">{text3}</div>
      </div>
    </div>
  );
}
