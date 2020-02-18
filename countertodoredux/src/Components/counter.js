import React from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../store/action/action";

class Counter extends React.Component {
  incrementHandler = () => {
    this.props.dispatch(increment());
  };

  decrementHandler = () => {
    this.props.dispatch(decrement());
  };

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1> {this.props.counter} </h1>
        <button onClick={this.incrementHandler}> Add </button>
        <button onClick={this.decrementHandler}> Sub </button>
        {/* <form>
          <input type="text" placeholder="Add Todo" /> <button>Add</button>
          <ul>
            {this.props.todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        </form> */}
      </div>
    );
  }
}

const mapStoreToProps = state => {
  console.log("app.js state", state);
  return {
    counter: state.counter
  };
};

export default connect(mapStoreToProps)(Counter);
