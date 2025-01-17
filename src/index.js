import React from 'react';
import './main.css';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from "./App"

import {Provider} from "react-redux"
import store from './Redux/store/store'

import { StrictMode } from 'react';
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)
root.render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
