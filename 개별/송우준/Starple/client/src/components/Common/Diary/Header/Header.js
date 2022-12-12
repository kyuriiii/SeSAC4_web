import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../../../assets/img/Dairy/Header/headerLogo.svg";
import IconButton from "@mui/material/IconButton";
import SearchBar from "../SearchBar/SearchBar";
import { FaRegComment, FaRegBell } from "react-icons/fa";
import ModifyToggle from "../../ModifyToggle/ModifyToggle";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="dairyHeaderWrapper">
      <div className="dairyHeaderContainer">
        <div className="dairyHeaderLogoContainer">
          <Logo onClick={() => navigate("/workspace/main")} />
        </div>
        <div className="dairyHeaderSearchbarContainer">
          <SearchBar />
        </div>
        <div className="dairyHeaderBtnContainer">
          <IconButton className="btn">
            <FaRegComment />
          </IconButton>
          <IconButton className="btn">
            <FaRegBell />
          </IconButton>
          <ModifyToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
