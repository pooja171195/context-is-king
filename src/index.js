import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react";
import { RegistrationContextProvider } from "../src/Context/RegistrationContext";

ReactDOM.render( <
    React.StrictMode >
    <
    RegistrationContextProvider >
    <
    BrowserRouter >
    <
    App / >
    <
    /BrowserRouter> <
    /RegistrationContextProvider>  <
    /React.StrictMode>,
    document.getElementById("root")
);