import React from "react";
import "./AlbumIndividualMode.scss";

import Title from "../Title/Title";
import Selector from "../Selector/Selector";
const AlbumRead = () => {
  const test = () => {
    console.log(1);
  };
  return (
    <div className="albumReadWrapper">
      <Title title={"2022"} count={20} onclick={test} />
      <Selector />
      <div className="albumContainer">
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
        <div className="content">
          {/* <img src="" alt=""> */}
        </div>
      </div>
    </div>
  );
};

export default AlbumRead;
