import React, { useState, useEffect, useCallback } from "react";
import "./read.scss";

import Planet_name from "../Planet_name/Planet_name";
import Category from "../Category/Category";
import MemberBox from "../MemberBox/MemberBox";

import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { alpha, styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

// 아이콘
import Avatar from "@mui/material/Avatar";
import { FaPlay } from "react-icons/fa";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import axios from "axios";
// MOCK 데이터
import DATA from "./data.js";

import { useParams, useNavigate } from "react-router-dom";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#3c52b2",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#3c52b2",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "red",
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
  },
});

const Read = () => {
  console.log("----------------------------------------");
  const params = useParams();
  // 파라미터
  const { planet, category, postId } = params;
  // 댓글 input 값
  const [commentValue, setCommentValue] = useState("");
  // axios 데이터
  const [data, setData] = useState({
    post: {},
    comment: [],
    writer: "",
  });
  let userInfo = localStorage.getItem("userInfo");
  let arr = JSON.parse(userInfo);
  const parse = require("html-react-parser");

  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/api/diary/getPost/${postId}`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => {
      setData({
        post: res.data.post,
        comments: res.data.comments,
      });
      console.log(data);
    });
  }, []);

  const handleChange = (e) => {
    setCommentValue(e.target.value);
  };

  const onClickCommentWrite = () => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/api//diary/PostComment`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
      data: {
        postId: postId,
        comment: commentValue,
        writer: arr.username,
      },
    }).then((res) => {
      if (res.status === 201) {
        window.location.reload();
      }
    });
  };

  const onClickPostDelete = () => {
    axios({
      method: "delete",
      url: `${process.env.REACT_APP_URL}/api//diary/deletePost`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
      data: {
        postId: postId,
      },
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="mainBackWrapper">
      <div className="mainWrapper">
        <div className="MainContainerTop">
          <div className="Planet_name_box">
            <Planet_name title={`${planet} 행성`} />
          </div>
          <div className="Modify_title_box">
            <Planet_name title={category} />
          </div>
        </div>
        <div className="Main_container">
          {/* 왼쪽 메뉴바 */}
          <div className="Categorybar_box">
            <div>
              <Category />
            </div>
            <div>
              <MemberBox />
            </div>
          </div>
          {/* 메인 컨텐츠 */}
          <div className="Main_box">
            <div className="diaryReaderWrapper">
              {/* 맨위 */}
              <div className="diaryReaderTopContainer">
                <div className="diaryReaderChoiced">{category}</div>
                <div className="diaryReaderTitle">{data.post.title}</div>
              </div>
              {/* 작성자 */}
              <div className="diaryReaderWriterWrapper">
                <ListItem sx={{ paddingLeft: "0" }}>
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    <Avatar sx={{ width: 30, height: 30 }} />
                  </ListItemIcon>
                  <ListItemText primary={data?.post?._user?.username} />
                </ListItem>
                <span>
                  <IconButton component="label">
                    <AiTwotoneEdit />
                  </IconButton>
                  <IconButton onClick={onClickPostDelete} component="label">
                    <AiTwotoneDelete />
                  </IconButton>
                </span>
              </div>
              <div className="diaryReaderContent">
                {/* string to html */}
                {parse(data.post.content ? data.post.content : "")}
              </div>
              <div className="diaryReaderCommentWrapper">
                <div className="diaryReaderCommentTitle">수다수다</div>
                <div className="diaryReaderCommentContainer">
                  {/* 댓글 */}
                  {/* 댓글 작성 로직 작성 후 수정 */}
                  {data?.comments?.map((e) => {
                    return (
                      <div className="diaryReaderCommentBox">
                        <div className="diaryReaderCommentWriter">
                          {e.writer}
                        </div>
                        <div className="diaryReaderCommentContent">
                          {e.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* 댓글 작성창 */}
              <div className="diaryReaderEditorWrapper">
                <CssTextField
                  sx={{ width: "100%" }}
                  label="댓글 작성"
                  multiline
                  rows={4}
                  value={commentValue}
                  onChange={handleChange}
                  variant="filled"
                />
                <div className="diaryReaderBtnWrapper">
                  <Button
                    sx={{
                      backgroundColor: "#0D0D7E",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#3c52b2",
                      },
                    }}
                    variant="contained"
                    endIcon={<FaPlay />}
                    onClick={onClickCommentWrite}
                  >
                    등록
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Read;
