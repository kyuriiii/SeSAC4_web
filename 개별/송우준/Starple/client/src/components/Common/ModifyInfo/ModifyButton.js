import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Button from "@mui/material/Button";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#0971f1",
      darker: "#053e85",
    },
    neutral: {
      main: "#747474",
      contrastText: "#fff",
    },
  },
});

const ModifyButton = ({ text, onClick, color }) => {
  return (
    <div className="modifyBtnBox">
      <ThemeProvider theme={theme}>
        <Button
          sx={{ width: 120, margin: 1 }}
          variant="contained"
          color={color}
          size="large"
          onClick={onClick}
        >
          {text}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default ModifyButton;
