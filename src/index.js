/**
 * @author Mohit Sharma
 * @email mohitsharma@inimist.com
 * @create date 2019-09-03 10:57:14
 * @modify date 2019-09-03 10:57:14
 * @desc [description]
 */
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App/App";
import * as serviceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <BrowserRouter>
    
      <App />
   
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
