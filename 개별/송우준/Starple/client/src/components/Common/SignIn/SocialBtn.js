import React from "react";
import "./SocialBtn.scss";

export default function SocialBtn({ src, href }) {
  return (
    <div className="socialBtnBox">
      <a href={href}>
        <img src={src}></img>
      </a>
    </div>
  );
}
