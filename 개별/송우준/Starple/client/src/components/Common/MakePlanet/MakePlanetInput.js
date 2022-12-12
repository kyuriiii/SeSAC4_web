import TextField from "@mui/material/TextField";
import "./MakePlanetInput.scss";
export default function MakePlanetInput({ onChange }) {
  const User = {
    id: "sesac",
  };

  return (
    <div className="makePlanetInputContainer">
      <TextField
        id="standard-search"
        label="행성이름을 입력해주세요"
        type="text"
        variant="standard"
        style={{
          width: "100%",
        }}
        onChange={onChange}
      ></TextField>
      <div className="error">
        {User.id ? (
          <div className="MakePlanetInputErrorIcon">{""}</div>
        ) : (
          <div className="MakePlanetInputErrorIcon">중복된 행성이름입니다.</div>
        )}
      </div>
    </div>
  );
}
