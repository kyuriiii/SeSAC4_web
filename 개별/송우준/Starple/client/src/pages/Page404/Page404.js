import { useEffect } from "react";
import "./Page404.scss";
import Ufo from "../../assets/img/Planet/ufo.png";
import { useNavigate } from "react-router-dom";
//! body에 class입히는 방법
const Page404 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.classList.add("bg-salmon");
  }, []);

  return (
    <div className="page_404">
      <div className="star-field">
        <div className="stars stars-sm" />
        <div className="stars stars-md" />
        <div className="stars stars-lg" />
      </div>
      <div className="page_404_main">
        <div
          className="page_404_LogoWrapper"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img className="ufoImg" src={Ufo} />
        </div>
        <div className="page_404_Box">
          <div className="page_404_text1">404ERROR</div>
          <div className="page_404_text2">페이지를 찾을 수 없습니다.</div>
          <br />
          <br />
          <div className="page_404_text3">
            페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
            <br />
            입력하신 주소가 정확한지 다시 한 번 확인해주세요. 찾을 수 없습니다.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page404;
