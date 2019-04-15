import React, { Component } from "react";
import "./App.css";
import Hero from "./Hero";
import Features from "./Features";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Features />
      </div>
    );
  }
}

export default App;
