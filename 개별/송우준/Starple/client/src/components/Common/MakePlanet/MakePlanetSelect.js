import * as React from "react";
import Box from "@mui/material/Box";
import "./MakePlanetSelect.scss";

export default function MakePlanetSelect({ id, value, onClick, src }) {
  return (
    <div className="planetSelect">
      <Box
        sx={{
          width: 100,
          height: 100,
        }}
      >
        <img
          src={src}
          value={value}
          id={id}
          onClick={onClick}
          style={{
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            display: "block",
            width: "100%",
          }}
        />
      </Box>
    </div>
  );
}
