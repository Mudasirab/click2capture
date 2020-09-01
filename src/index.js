import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-svg-core/styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import App from './app'
import "./css/style.css";
import "./css/layout.css";
import { BrowserRouter } from "react-router-dom";

const Index = (<BrowserRouter >
    <App />

</BrowserRouter>)

ReactDOM.render(Index, document.getElementById('root'));