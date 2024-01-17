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
import { BrowserRouter } from 'react-router-dom'

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
<BrowserRouter><App /></BrowserRouter>);


