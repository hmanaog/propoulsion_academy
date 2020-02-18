import React from "react";
import Counter from "./Components/counter";
import TodoList from "./Components/TodoList";

class App extends React.Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <Counter />
        <TodoList />
      </div>
    );
  }
}

export default App;
