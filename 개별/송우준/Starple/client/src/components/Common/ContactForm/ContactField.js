import React from "react";
import "./ContactField.scss";

export default function ContactField({ placeholder }) {
  return (
    <div>
      <div className="ContactFieldBox">
        <textarea
          className="ContactFieldText"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  );
}
