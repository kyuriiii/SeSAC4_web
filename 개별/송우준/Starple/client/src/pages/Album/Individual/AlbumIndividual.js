import React from "react";
import "./albumIndividual.scss";

import StarMap from "../../../components/Common/StarMap/StarMap";
import Header from "../../../components/Common/Diary/Header/Header";
import Frame from "../../../components/Common/Frame/Frametitle";
import AlbumMain from "../../../components/Common/Album/AlbumIndividualMode/AlbumIndividualMode";

const AlbumIndividual = () => {
  return (
    <div className="back">
      <StarMap />
      <Header />
      <Frame planetTitle={"sion"} content={<AlbumMain />} />
    </div>
  );
};

export default AlbumIndividual;
