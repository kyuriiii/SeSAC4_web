import React from "react";
import TextField from "@mui/material/TextField";
import "./MakePlanetMember.scss";
export default function MakePlanetMember({ text, value, onChange }) {
  return (
    <div className="makePlanetMemberBox">
      <div className="makeplanetMemberAccount_Box">
        <div className="makePlanetMemberAccount">{text}</div>
      </div>
      <TextField
        id="outlined-search"
        label="유저 아이디를 입력해주세요 "
        type="search"
        style={{
          width: "100%",
        }}
        onChange={onChange}
      />
    </div>
  );
}
