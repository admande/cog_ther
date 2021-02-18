import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Keeper from './Keeper';
import reportWebVitals from './reportWebVitals';
import Enrichments, { Component } from "mosaic-components";
import { createTheme } from "@vitalsource/vstui/themes";
import { brick } from "@vitalsource/vstui/colors";

// Enrichments.getManifest(
//   "900c2fc0-043c-4910-9253-bec7b024efce"
//  ).then(console.log);
const myTheme = createTheme({ color: { primary: brick } });


ReactDOM.render(
  <React.StrictMode>
    <Component theme={myTheme} vaultId="207046"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
