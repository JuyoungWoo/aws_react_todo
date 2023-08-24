import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //StrictMode: 콘솔에 에러 문장 찍힘. 콘솔이 2번씩 찍히므로 주석 처리
  //
  // <React.StrictMode>
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>

  // </React.StrictMode>
);
reportWebVitals();
