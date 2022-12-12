import React, { useState, useEffect, useCallback } from "react";
import "./category.scss";

// MUI 라이브러리
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

// 아이콘
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faCalendarDays,
  faBookmark,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { FaList, FaFolder } from "react-icons/fa";

import axios from "axios";

// mobx
import store from "../../../../store/index";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { useParams, useNavigate } from "react-router-dom";

const Category = observer(({ sx }) => {
  let params = useParams();
  console.log("params : ", params);
  let navigate = useNavigate();
  const { planet, category } = params;
  const { planetClass } = store;

  const [open, setOpen] = useState(true);
  const [open_1, setOpen_1] = useState(true);
  const [open_2, setOpen_2] = useState(true);
  const [diaryCategory, setDiaryCategory] = useState([]);

  useEffect(() => {
    async function getCategory(planetName) {
      // 이름과 행성을 파라미터로 전달하여 카테고리를 받는다.
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_URL}/api/planet/getCategory/${planetName}`,
        header: {
          withCredentials: true,
          Authorization: localStorage.getItem("token"),
        },
      })
        .then((res) => {
          setDiaryCategory(res.data.diary);
        })
        .catch((err) => console.log(err.response.data));
    }
    // 함수 실행 및 카테고리 설정
    getCategory(planet);
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClick_1 = () => {
    setOpen_1(!open_1);
  };
  const handleClick_2 = () => {
    setOpen_2(!open_2);
  };

  return (
    <List sx={sx} component="nav">
      {/* 사진첩 */}
      <ListItemButton
        onClick={() => navigate(`/album/main/${planet}/${category}`)}
      >
        <ListItemIcon
          sx={{ color: "#0D0783", minWidth: "45px", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faImage} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: "#0D0783",
            fontSize: "15px",
            fontWeight: 500,
          }}
          primary="사진첩"
        />
      </ListItemButton>
      {/* 일정 */}
      <ListItemButton>
        <ListItemIcon
          sx={{ color: "#0D0783", minWidth: "45px", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faCalendarDays} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: "#0D0783",
            fontSize: "15px",
            fontWeight: 500,
          }}
          primary="일정"
        />
      </ListItemButton>
      {/* 북마크 */}
      <ListItemButton>
        <ListItemIcon
          sx={{ color: "#0D0783", minWidth: "45px", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faBookmark} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: "#0D0783",
            fontSize: "15px",
            fontWeight: 500,
          }}
          primary="북마크"
        />
      </ListItemButton>
      {/* 다이어리 */}
      <ListItemButton onClick={handleClick}>
        <ListItemIcon
          sx={{ color: "#0D0783", minWidth: "45px", fontSize: "20px" }}
        >
          <FontAwesomeIcon icon={faBook} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{
            color: "#0D0783",
            fontSize: "15px",
            fontWeight: 500,
          }}
          primary="다이어리"
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton
            sx={{ height: "30px", pl: 5, fontSize: "13px", fontWeight: 500 }}
          >
            <ListItemIcon sx={{ color: "#0D0783", minWidth: "30px" }}>
              <FaList />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "#0D0783",
                fontSize: "13px",
                fontWeight: 500,
              }}
              primary="버킷리스트"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ height: "30px", pl: 5, fontSize: "13px", fontWeight: 500 }}
          >
            <ListItemIcon sx={{ color: "#0D0783", minWidth: "30px" }}>
              <FaList />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "#0D0783",
                fontSize: "13px",
                fontWeight: 500,
              }}
              primary="한줄 일기"
            />
          </ListItemButton>
          <ListItemButton
            sx={{ height: "30px", pl: 5, fontSize: "13px", fontWeight: 500 }}
            onClick={handleClick_2}
          >
            <ListItemIcon sx={{ color: "#0D0783", minWidth: "30px" }}>
              <FaList />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                color: "#0D0783",
                fontSize: "13px",
                fontWeight: 500,
              }}
              primary="추억 저장소"
            />
            {open_2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open_2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {diaryCategory?.map((e) => {
                return (
                  <ListItemButton
                    sx={{
                      height: "30px",
                      pl: 7,
                      fontSize: "11px",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      navigate(`/diary/main/${planet}/${e}`);
                    }}
                  >
                    <ListItemIcon sx={{ color: "#0D0783", minWidth: "30px" }}>
                      <FaFolder />
                    </ListItemIcon>
                    <ListItemText
                      primaryTypographyProps={{
                        color: "#0D0783",
                        fontSize: "11px",
                        fontWeight: 500,
                      }}
                      primary={e}
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Collapse>
    </List>
  );
});

export default Category;
