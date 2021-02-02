import React from 'react';
// import ReactDOM from 'react-dom';
import './bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import Footer  from './modules/shared/layout/Footer';

render([<App key="app" />, <Footer key="app-footer" />], document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
