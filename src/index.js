import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
/* import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { render } from "@testing-library/react"; */

let name = "Galahad";

function A(props) {
  return <p>Salut Monde! {props.name}</p>;
}

function B(props) {
  return <p>Ciao Mondo! {props.name}</p>;
}

class MyComponentClass extends Component {
  render() {
    return <p>Hi, i'm from your class</p>;
  }
}

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
        <A name={name} />
        <B name={name} />
        <MyComponentClass />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Appo />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
