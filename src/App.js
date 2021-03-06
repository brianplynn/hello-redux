import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import { createStore } from "redux";
import store from "./store"

class App extends Component {
  render() {
    return [
    	<HelloWorld key={1} tech={store.getState().tech} />,
    	<ButtonGroup key={2} technologies={["React", "Elm", "Reactredux"]} />
    	];
  }
}

export default App;
