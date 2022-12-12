import React, { useState, useEffect } from "react";
import "./Diary_main.scss";
import Diary_content from "../../Common/Diary/Diary_content/Diary_content";
import Planet_name from "../../Common/Diary/Planet_name/Planet_name";
import Category from "./Category/Category";
import MemberBox from "./MemberBox/MemberBox";
import Selector from "./Selector/Selector";
import IconButton from "@mui/material/IconButton";
import { FaPen } from "react-icons/fa";

import usePagination from "./Pagination";
import Pagination from "@mui/material/Pagination";

import { Link, useParams } from "react-router-dom";

// MOCK 데이터
import DATA from "./data.js";
import axios from "axios";

const Diary_main = ({ planetTitle }) => {
  const params = useParams();
  const { planet, category } = params;
  let [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const PER_PAGE = 6;

  const count = Math.ceil(data.length / PER_PAGE);

  // data를 못불러오면 mock데이터 활용
  // skeleton 처리 필요
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  useEffect(() => {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/api/diary/getPosts/${planet}/${category}`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        setData(res.data.diaries);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div className="mainBackWrapper">
      <div className="Main_wrapper">
        <div className="Main_container_top">
          <div className="Planet_name_box">
            <Planet_name title={planetTitle} />
          </div>
          <div className="Modify_title_box">
            <Planet_name title={"2022"} />
            <Link to={`/diary/write/${planet}/${category}`}>
              <IconButton>
                <FaPen />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="Main_container">
          <div className="Categorybar_box">
            <div className="Categorybar_box_list">
              <Category
                sx={{
                  width: "100%",
                  maxWidth: "40rem",
                  bgcolor: "background.paper",
                }}
              />
            </div>
            <div>
              <MemberBox />
            </div>
          </div>
          <div className="Main_box">
            <div className="Diary_selector_box">
              <Selector />
            </div>
            <div className="Diary_main_box">
              {_DATA.currentData().map((e, i) => {
                return (
                  <Link to={`/diary/read/${planet}/${category}/${e._id}`}>
                    <Diary_content
                      key={i}
                      title={e.title}
                      date={e.createdAt}
                      writer={e._user.username}
                      content={e.content}
                    />
                  </Link>
                );
              })}
            </div>{" "}
            <div className="dairyPaginationWrapper">
              <Pagination
                count={count}
                size="large"
                page={page}
                color="secondary"
                shape="rounded"
                onChange={handleChange}
                sx={{
                  ul: { justifyContent: "center" },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diary_main;
