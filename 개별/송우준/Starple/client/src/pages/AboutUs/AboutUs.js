import React from "react";
import Header from "../../components/Common/WorkSpace/Header/Header";
import StarMap from "../../components/Common/StarMap/StarMap";
import "./AboutUs.scss";
import AboutUsBtn from "../../components/Common/AboutUsBtn/AboutUsBtn";
import Footer from "../../components/Common/WorkSpace/Footer/Footer";

import {
  faBookOpen,
  faBookOpenReader,
  faList,
  faCamera,
  faCalendar,
  faBookmark,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutUs() {
  return (
    <div className="aboutUsSection">
      <Header />
      <StarMap />
      <div className="aboutUsContainer">
        <div className="aboutUstitleBox">
          <div className="aboutUsTitle">소중한 사람들과의 추억을</div>
          <br />
          <div className="aboutUsTitle">우리만의 행성에 간직하세요</div>
        </div>
        <div className="aboutUsTextBox">
          <div className="aboutUsText1">
            Starpl은 가족, 친구, 연인 등 소중한 사람들과 추억을 나눌 수 있는
            다이어리 입니다.
          </div>
          <div className="aboutUsText1">
            다양한 형태로 기록을 남길 수 있게 여러가지 형식의 다이어리 속지를
            제공합니다.
          </div>
          <div className="aboutUsText2">
            이 밖에도 사진첩 , 일정표, 채팅 등의 서비스를 통해 더 유용하게
            이용하세요.
          </div>
        </div>
        <div className="aboutUsBtnContainer">
          <AboutUsBtn
            icon={faBookOpen}
            text1="추억 저장소"
            text2="소중한 하루를 일기로 작성하세요"
          />
          <AboutUsBtn
            icon={faBookOpenReader}
            text1="한 줄 일기"
            text2="오늘 하루는 어땟나요? "
            text3="서로의 하루를 짧게 기록하세요."
          />
          <AboutUsBtn
            icon={faList}
            text1="버킷리스트"
            text2="함께 만들어갈 추억을"
            text3="버킷리스트로 작성해보세요."
          />
        </div>
        <div className="aboutUsBtnContainer">
          <AboutUsBtn
            icon={faCamera}
            text1="사진첩"
            text2="함께 찍은 사진을 업로드해"
            text3="추억하고 공유하세요."
          />
          <AboutUsBtn
            icon={faCalendar}
            text1="일정"
            text2="함께할 일정들을"
            text3="작성하고 공유하세요."
          />
          <AboutUsBtn
            icon={faBookmark}
            text1="북마크"
            text2="더 특별한 일기나 사진은"
            text3="북마크에 저장하고 추억하세요."
          />
          <AboutUsBtn
            icon={faComment}
            text1="채팅"
            text2="멤버들과 채팅하며 "
            text3="대화를 나눠보세요."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
