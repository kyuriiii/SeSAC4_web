import React, { useState } from "react";
import "./selector.scss";

import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Selector = () => {
  const [option, setOption] = useState("latest");

  const handleChange = e => {
    setOption(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, width: "100px" }}>
      <FormHelperText sx={{ m: 0 }}>정렬 기준</FormHelperText>
      <Select
        sx={{ height: "30px", fontSize: "12px" }}
        value={option}
        onChange={handleChange}
        displayEmpty
      >
        <MenuItem value={"latest"}>최신순</MenuItem>
        <MenuItem value={"oldest"}>오래된 순</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Selector;
