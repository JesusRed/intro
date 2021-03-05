import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";
import { render } from "@testing-library/react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        "Back in black",
        "Welcome to the Jungle",
        "Stairway to heaven",
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.articles.map((title) => {
          return <p>{title}</p>;
        })}
      </div>
    );
  }
}

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  syncChanges(value, property) {
    let state = {};
    state[property] = value;
    this.setState(state);
  }
  submitForm = () => {
    console.log(this.state);
  };

  render() {
    return (
      <form>
        <input
          onChange={(ev) => {
            this.syncChanges(ev.target.value, "email");
          }}
          type="email"
          placeholder="Email"
          value={this.state.email}
        />
        <input
          onChange={(ev) => {
            this.syncChanges(ev.target.value, "password");
          }}
          type="password"
          placeholder="****"
          value={this.state.password}
        />
        <div>
          <input onClick={this.submitForm} type="submit" value="Log In" />
        </div>
      </form>
    );
  }
}

class Contador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };
  }

  aumentar = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <button onClick={this.aumentar}>Aumentar</button>
      </div>
    );
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
        {/* <Contador></Contador>
        <Formulario></Formulario>
        <Blog></Blog> */}
      </div>
    );
  }
}

render(<Appo />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
