import React from "react";
import Header from "../../components/Common/WorkSpace/Header/Header";
import StarMap from "../../components/Common/StarMap/StarMap";
import Footer from "../../components/Common/WorkSpace/Footer/Footer";
import ContactInput from "../../components/Common/ContactForm/ContactInput";
import "./Contact.scss";
import ContactField from "../../components/Common/ContactForm/ContactField";
import ContactInputBtn from "../../components/Common/ContactForm/ContactInputBtn";
import {
  faUser,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="ContactContainer">
      <Header />
      <StarMap />
      <div className="ContactBox">
        <div className="ContactTextBox">
          <div className="ContactText1">연락 정보</div>
          <div className="ContactText2">
            서비스에 대해 궁금한 점이 있으시다면 아래 폼을 작성해주세요.
          </div>
          <div className="ContactText3">24시간 내로 답변해 드리겠습니다.</div>
        </div>
      </div>
      <div className="ContactFormSection">
        <div className="ContactFormContainer">
          <div className="ContactFormBox">
            <ContactInput icon={faUser} placeholder={"아이디"} />
            <ContactInput icon={faEnvelope} placeholder={"이메일"} />
            <ContactInput icon={faMobile} placeholder={"전화번호"} />
            <ContactField placeholder={"내용을 작성해 주세요."} />
            <ContactInputBtn />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
