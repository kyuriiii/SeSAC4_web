import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ContactInput.scss";
export default function ContactInput({ icon, placeholder }) {
  return (
    <div className="ContactInputContainer">
      <div className="ContactInputBox">
        <div className="ContactInputIconBox">
          <FontAwesomeIcon className="ContactInputIcon" icon={icon} />
        </div>
        <input placeholder={placeholder}></input>
      </div>
    </div>
  );
}
