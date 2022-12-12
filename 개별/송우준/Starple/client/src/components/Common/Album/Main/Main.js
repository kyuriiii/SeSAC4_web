import React from "react";
import "./main.scss";

import Title from "../Title/Title";
import AlbumAllMode from "../AlbumAllMode/AlbumAllMode";
import Selector from "../Selector/Selector";
import AlbumMode from "../AlbumMode/AlbumMode";
const Main = () => {
  const test = () => {
    console.log(1);
  };
  return (
    <div className="frame">
      <div className="all">
        <Title title={"전체사진"} count={5} onclick={test} />
        <Selector />
        <AlbumAllMode />
      </div>
      <div className="albums">
        <Title title={"앨범"} onclick={test} />
        <Selector />
        <AlbumMode albumTitle={"2022"} count={5} />
      </div>
    </div>
  );
};

export default Main;
