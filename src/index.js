import React from 'react';
import ReactDOM from "react-dom/client";

import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { RegistrationContextProvider } from './Context/RegistrationContext';

ReactDOM.createRoot(document.querySelector("#root")).render( <
        React.StrictMode >
        <
        BrowserRouter >
        <
        RegistrationContextProvider >
        <
        App / >
        <
        /RegistrationContextProvider> <
        /BrowserRouter> <
        /React.StrictMode>);