import React from "react";
import "./workSpaceMain.scss";

// 컴포넌트
import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/WorkSpace/Header/Header";
import Main from "../../../components/Common/WorkSpace/Main/Main";
import Footer from "../../../components/Common/WorkSpace/Footer/Footer";
const WorkSpaceMain = () => {
  console.log(localStorage.getItem("token"));
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default WorkSpaceMain;
