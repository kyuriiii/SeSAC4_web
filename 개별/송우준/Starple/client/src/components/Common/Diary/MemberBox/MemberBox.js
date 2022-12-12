import React, { useState, useEffect } from "react";
import "./memberBox.scss";

// MUI 라이브러리
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// 내부 리스트 선언 컴포넌트
import Collapse from "@mui/material/Collapse";

// 화살표
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// 아이콘
import Avatar from "@mui/material/Avatar";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const MemberBox = () => {
  const params = useParams();
  const [open, setOpen] = useState(true);
  const [userArr, setUserArr] = useState([]);
  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    async function getMember(planetName) {
      await axios({
        // 해당 행성에 대한 해당 카테고리의 다이어리들 불러오기
        // 행성과 카테고리 파라미터로 전달
        url: `${process.env.REACT_APP_URL}/api/planet/getMembers/${planetName}`,
        method: "get",
        header: {
          withCredentials: true,
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          setUserArr(res.data.nameArr);
        })
        .catch((err) => console.log(err.response.data));
    }
    getMember(params.planet);
  }, []);

  return (
    <List
      className="memberbox_wrapper"
      sx={{
        width: "100%",
        maxHeight: "232px",
        overflow: "auto",
        position: "relative",
        paddingTop: "0",
      }}
    >
      <ListItemButton
        sx={{
          width: "100%",
          maxWidth: "200px",
          zIndex: "3",
          backgroundColor: "#fff",
          padding: "10px 16px",
          marginTop: "-3px",
          "&:hover": {
            backgroundColor: "#fff",
            opacity: 1,
          },
        }}
        onClick={handleClick}
      >
        <ListItemIcon>{open ? <ExpandLess /> : <ExpandMore />}</ListItemIcon>
        <ListItemText primary={"멤버"}></ListItemText>
      </ListItemButton>
      {/* <div className="memberbox_space" /> */}
      <Collapse
        // sx={{ marginTop: "35px" }}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List sx={{ marginTop: "5px" }} component="div" disablePadding>
          {userArr.map((e) => {
            return (
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <Avatar />
                </ListItemIcon>
                <ListItemText primary={e}></ListItemText>
              </ListItemButton>
            );
          })}
        </List>
      </Collapse>
    </List>
  );
};

export default MemberBox;
