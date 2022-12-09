import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import App from "./App";
import Button from "./Button";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Button name='dd'/>
    <App />
  </React.StrictMode>
);