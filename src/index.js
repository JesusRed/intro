import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { render } from "@testing-library/react";
import Contador from './counter'

class Appo extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    let name = "Galahad";
    return (
      <div>
        <Contador />
      </div>
    );
  }
}

render(<Appo />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
