import React, { useEffect, useState, useCallback } from "react";
import "./modify.scss";
// MUI 라이브러리
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// 에디터
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Navigate } from "react-router-dom";
// 아이콘
import { FaPlay } from "react-icons/fa";
// MOCK 데이터
import axios from "axios";

const Writer = () => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [post, setPost] = useState([]);

  const navigate = Navigate();
  const onChangeValue = e => {
    setTitleValue(e.target.value);
  };

  useEffect(() => {
    // 수정을 위한 불러오기
    async function getPostContentForModify() {
      await axios({
        method: "get",
        url: `/diary/getPost/${postNum}`,
        header: {
          withCredentials: true,
          Authorization: localStorage.getItem("token")
        }
      })
        .then(res => {
          // 데이터를 어떻게 받아올지?
          setPost(res.data);
          setTitleValue(res.data.title);
          setContentValue(res.data.content);
          // title, content,id
        })
        .catch(err => console.log(err.response.data));
    }
    getPostContentForModify();
  });

  // 글 수정 함수
  const onClickPostModify = async id => {
    await axios({
      method: "put",
      url: `/diary/ModifyPost`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token")
      },
      data: {
        // 글의 Object_id와 제목과 글
        id: id,
        title: titleValue,
        content: contentValue
      }
    })
      .then(res => {
        // 글 작성 성공시
        if (res.status === 200) {
          alert("글이 작성되었습니다.");
          // todo 성공시 해당 행성의 해당 카테고리 메인 화면으로 이동
          // navigate(`/diary/main/${category}`);
          // 임시로 뒤로가기 처리
          navigate(-1);
        }
      })
      .catch(err => console.log(err.response.data));
  };

  return (
    <div className="dairyWriterBackWrapper">
      <div className="dairyWriterWrapper">
        <div className="dairyWriterArrow" />
        <div className="dairyWriterTitleContainer">
          <TextField
            sx={{
              width: "900px",
              color: "#3c52b2",
              "& label.Mui-focused": {
                color: "#3c52b2"
              },
              "& .MuiInput-underline:after": {
                borderBottomColor: "#3c52b2"
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3c52b2"
                },
                "&:hover fieldset": {
                  borderColor: "#3c52b2"
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3c52b2"
                }
              }
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
              onClick={() => {
                onClickPostModify(post.id);
              }}
              sx={{
                backgroundColor: "#0D0D7E",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2"
                }
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
              data={contentValue}
              onReady={editor => {
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
