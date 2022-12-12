import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ResetPw2Page.scss";
import ResetPw2PwInput1 from "../../components/Common/ResetPw2/ResetPw2PwInput1";
import ResetPw2PwInput2 from "../../components/Common/ResetPw2/ResetPw2PwInput2";
import StarMap from "../../components/Common/StarMap/StarMap";
import ResetPw2Btn from "../../components/Common/ResetPw2/ResetPw2Btn";
import Main_Logo from "../../assets/img/LandingPage/logo_main.svg";
import axios from "axios";

const ResetPw2Page = () => {
  const [hashedPW, setPW] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const { uid } = params;
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);

  const Reset = () => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_URL}/api/auth/resetPW2`,
      header: { withCredentials: true },
      data: {
        uid: uid,
        hashedPW: hashedPW,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert("비밀번호가 수정되었습니다.");
      })
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log("An error occurred:", err);
        alert("비밀번호를 수정할 수 없습니다!");
      });
  };

  return (
    <>
      <StarMap />
      <div className="resetPw2LogoWrapper">
        <img
          src={Main_Logo}
          onClick={() => {
            navigate("/");
          }}
        />
      </div>
      <div className="resetPw2Wrapper">
        <div className="resetPw2Section">
          <div className="resetPw2HeaderSection">
            <div className="resetPw2Header">비밀번호 재설정</div>
          </div>
          <div className="resetPw2Text">새로운 비밀번호를 입력해주세요.</div>
          <div className="resetPw2Text"></div>
          <ResetPw2PwInput1
            onChange={(e) => {
              setPW(e.target.value);
              console.log(e.target.value);
            }}
          />
          <ResetPw2PwInput2
            onChange={(e) => {
              setPW(e.target.value);
              console.log(e.target.value);
            }}
          />
          <div className="btnBox">
            <ResetPw2Btn text={"비밀번호 재설정"} onClick={Reset} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPw2Page;
