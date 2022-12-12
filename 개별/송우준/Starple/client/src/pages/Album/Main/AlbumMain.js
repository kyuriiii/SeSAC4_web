import React from "react";
import "./albumMain.scss";

// 컴포넌트
import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/Diary/Header/Header";
import Frame from "../../../components/Common/Frame/Frametitle";
import Main from "../../../components/Common/Album/Main/Main";

const AlbumMain = () => {
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Frame planetTitle={"sion"} content={<Main />} />
    </div>
  );
};

export default AlbumMain;
