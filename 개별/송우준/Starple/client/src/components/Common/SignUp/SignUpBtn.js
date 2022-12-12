import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Button from "@mui/material/Button";
import "./SignUpBtn.scss";

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

const SignUpBtn = ({ text, onClick }) => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="neutral"
          size="large"
          onClick={onClick}
        >
          {text}
        </Button>
      </ThemeProvider>
    </div>
  );
};

export default SignUpBtn;
