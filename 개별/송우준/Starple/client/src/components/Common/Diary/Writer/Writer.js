import React, { useEffect, useState, useCallback } from "react";
import "./writer.scss";
import Editor from "../../Editor/Editor";
// MUI 라이브러리
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { alpha, styled } from "@mui/material/styles";
// 에디터
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, useParams } from "react-router-dom";
// 아이콘
import { FaPlay } from "react-icons/fa";
// MOCK 데이터
import axios from "axios";

const Writer = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const navigate = useNavigate();
  const params = useParams();
  // 파라미터
  const { planet, category } = params;

  const onChangeValue = (e) => {
    setTitleValue(e.target.value);
  };

  let userInfo = localStorage.getItem("userInfo");
  let arr = JSON.parse(userInfo);
  // 글 작성 함수

  const onClickPostWrite = async () => {
    if (!titleValue || !contentValue) {
      alert("제목과 내용을 모두 작성해주세요!");
      return;
    }

    await axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/api/diary/writePost`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
      data: {
        // 제목과 글
        planet: planet,
        category: category,
        writerId: arr._id,
        title: titleValue,
        content: contentValue,
      },
    })
      .then((res) => {
        // 글 작성 성공시
        if (res.status === 201) {
          alert("글이 작성되었습니다.");
          navigate(-1);
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="dairyWriterBackWrapper">
      <div className="dairyWriterWrapper">
        <div className="dairyWriterTitleContainer">
          <TextField
            sx={{
              width: "900px",
              color: "#3c52b2",
              "& label.Mui-focused": {
                color: "#3c52b2",
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#3c52b2",
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3c52b2",
                },
                "&:hover fieldset": {
                  borderColor: "#3c52b2",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3c52b2",
                },
              },
            }}
            rows={1}
            size="small"
            label="제목"
            variant="standard"
            value={titleValue}
            onChange={onChangeValue}
          />
          <div className="BtnBox">
            <Button
              onClick={onClickPostWrite}
              sx={{
                backgroundColor: "#0D0D7E",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2",
                },
              }}
              variant="contained"
              endIcon={<FaPlay />}
            >
              작성 완료
            </Button>
          </div>
        </div>
        <div className="dairyWriterEditorContainer">
          {/* <Editor /> */}
          <div className="writer_wrapper">
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                // console.log("Editor is ready to use!", editor);
              }}
              onChange={(event, editor) => {
                setContentValue(editor.getData());
              }}
              onBlur={(event, editor) => {
                // console.log("Blur.", editor);
              }}
              onFocus={(event, editor) => {
                // console.log("Focus.", editor);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Writer;
