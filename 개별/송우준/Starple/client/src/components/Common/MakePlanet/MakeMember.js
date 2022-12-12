import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import "./MakeMember.scss";

export default function MakeMember({ sx }) {
  return (
    <div className="memberAdd">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={member}
        sx={sx}
        renderInput={(params) => <TextField {...params} label="멤버추가" />}
      />
    </div>
  );
}

const member = [
  { label: "송진세", year: 2008 },
  { label: "정예현", year: 1957 },
  { label: "염시온", year: 1993 },
];
