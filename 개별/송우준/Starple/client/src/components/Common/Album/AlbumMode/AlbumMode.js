import React from "react";
import "./albumMode.scss";

// 슬릭 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AlbumMode = ({ albumTitle, count }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  return (
    <div className="albumWrapper">
      <div className="albumTitle">
        {albumTitle}
      </div>
      <div className="albumCount">
        {count}
      </div>
      <div className="albumSliderWrapper">
        <div className="sliderContainer">
          <Slider {...settings}>
            <div className="content">{/* <img src="" alt=""> */}</div>
            <div className="content">{/* <img src="" alt=""> */}</div>{" "}
            <div className="content">{/* <img src="" alt=""> */}</div>{" "}
            <div className="content">{/* <img src="" alt=""> */}</div>{" "}
            <div className="content">{/* <img src="" alt=""> */}</div>{" "}
            <div className="content">{/* <img src="" alt=""> */}</div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AlbumMode;
