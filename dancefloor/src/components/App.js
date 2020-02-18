import React, { Component } from "react";
import Cell from "../container/cell";
import "./discoCells.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      number: { bob: 1 }
    };
    setInterval(() => {
      this.setState({ number: this.state.number });
    }, 100);
  }

  render() {
    const colorNames = ["red_cell", "blue_cell", "yellow_cell", "purple_cell"];
    const num = [];
    for (let i = 0; i < 25; i++) {
      const randomColor = colorNames[Math.floor(Math.random() * 5)];
      num.push(<div id={i} className={randomColor + " discoCells"}></div>);
    }
    return (
      <div className="box">
        {num.map(item => {
          return <Cell>{item}</Cell>;
        })}
      </div>
    );
  }
}

export default App;
