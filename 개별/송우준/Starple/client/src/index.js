
import React, { useEffect } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles/common.scss";
import reportWebVitals from "./reportWebVitals";
import Router from "./components/Router/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const callApi = async()=> {
//   axios.get('/api').then((res)=> console.log(res.data.test));
// }

// useEffect(()=>{
//   callApi();
// }, []);


root.render(
  <>
    <Router />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
