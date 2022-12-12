import Button from "@mui/material/Button";
import "./SuccessSignUpBtn.scss";

const SuccessSignUpBtn = ({ onClick }) => {
  return (
    <div className="successSignUpBtnContainer">
      <Button variant="contained" onClick={onClick}>
        로그인
      </Button>
    </div>
  );
};

export default SuccessSignUpBtn;
