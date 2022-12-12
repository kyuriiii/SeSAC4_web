import React, { useState } from "react";
import "./diaryMain.scss";

import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/Diary/Header/Header";
import Diary_main from "../../../components/Common/Diary/Diary_main";

const DiaryMain = ({}) => {
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Diary_main />
    </div>
  );
};

export default DiaryMain;
