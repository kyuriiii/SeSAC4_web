import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import "./SignInInput.scss";

const SignInInput = ({ type, text, placeholder, setData, value }) => {
  const ref1 = useRef();
  const ref2 = useRef();

  const handleClick = () => {
    ref1.current.value = "";
    ref2.current.hidden = true;
  };
  const changeInput = (e) => {
    if (e.target.value != "") ref2.current.hidden = false;
    else ref2.current.hidden = true;
  };

  return (
    <div className="signInInputContainer">
      <div className="signInInputSection">
        <div className="signInInputIcon" value={text}>
          {text}
        </div>
        <input
          type={type}
          className="signInInput"
          ref={ref1}
          onChange={(e) => {
            changeInput(e);
            setData(e.target.value);
          }}
          value={value}
          placeholder={placeholder}
        ></input>
        <button
          className="signInInputIcon"
          ref={ref2}
          onClick={() => {
            handleClick();
            setData("");
          }}
          hidden
        >
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </div>
    </div>
  );
};

export default SignInInput;
