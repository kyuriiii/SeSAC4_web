import React from "react";
import "./SignInHeader.scss";

const SignInHeader = ({ text }) => {
  return (
    <div className="signInHeaderSection">
      <div className="signInHeader" value={text}>
        {text}
      </div>
    </div>
  );
};

export default SignInHeader;
