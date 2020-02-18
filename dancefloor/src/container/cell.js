// createCells = () => {
//     const cells = []
//     // your code here
//     return cells;
// }

import React, { Component } from "react";
import "./cell.css";

class Cell extends Component {
  render() {
    return <div className="cell">{this.props.children}</div>;
  }
}

export default Cell;
