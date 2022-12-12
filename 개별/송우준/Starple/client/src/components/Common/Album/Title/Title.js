import React from "react";
import "./title.scss";
import IconButton from "@mui/material/IconButton";
import { FaPlus } from "react-icons/fa";
const Title = ({ title, count, onclick }) => {
  return (
    <div>
      <div className="albumTitleWrapper">
        <div className="titleTop">
          <div className="wrap">
            <div className="albumTitle">
              {title}
            </div>
            <div className="albumCount">
              {count}
            </div>
          </div>
          <div className="albumTitleBtn" onClick={onclick}>
            <IconButton sx={{ color: "#100584" }}>
              <FaPlus />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
