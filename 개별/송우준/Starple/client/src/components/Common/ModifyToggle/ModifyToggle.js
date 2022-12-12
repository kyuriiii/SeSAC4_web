import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import ModifyPlanet from "../ModifyPlanet/ModifyPlanet";
import Avatar from "@mui/material/Avatar";

export default function SimplePopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <button
        className="toggleBtn"
        aria-describedby={id}
        type="button"
        onClick={handleClick}
      >
        <Avatar />
      </button>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
          <div>
            <ModifyPlanet />
          </div>
          <div className="logoutBtn">
            <button>로그아웃</button>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
