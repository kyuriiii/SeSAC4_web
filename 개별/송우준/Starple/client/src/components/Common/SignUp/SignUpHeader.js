import React from "react";
import "./SignUpHeader.scss";
const SignUpHeader = ({ text }) => {
  return (
    <div className="signUpHeaderSection">
      <div className="signUpHeader" value={text}>
        {text}
      </div>
    </div>
  );
};

export default SignUpHeader;
