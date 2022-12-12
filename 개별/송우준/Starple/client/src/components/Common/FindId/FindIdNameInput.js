import React, { useState } from "react";
import "./FindIdNameInput.scss";

const FindIdNameInput = () => {
  const [username, setUsername] = useState("");
  const handleName = (e) => {
    setUsername(e.target.value);
  }

  return (
    <>
      <div className="findIdNameInputContainer">
        <div className="findIdNameInputTitle">Name</div>
        <input
          className="findIdNameInput"
          placeholder="이름을 입력해주세요"
          value={username}
          onChange={handleName}
          type="text"
        ></input>
      </div>
      <div>
        {username ? (
          <div className="errorMessageWrap">{""}</div>
        ) : (
          <div className="errorMessageWrap">{""}</div>
        )}
      </div>
    </>
  );
};

export default FindIdNameInput;
