import React from "react";
import "./diaryRead.scss";
import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/Diary/Header/Header";
import Read from "../../../components/Common/Diary/Read/Read";
const DiaryRead = () => {
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Read />
    </div>
  );
};

export default DiaryRead;
