import React from "react";
import "./diaryWrite.scss";

// 컴포넌트
import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/Diary/Header/Header";
import Writer from "../../../components/Common/Diary/Writer/Writer";

const DiaryWrite = () => {
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Writer />
    </div>
  );
};

export default DiaryWrite;
