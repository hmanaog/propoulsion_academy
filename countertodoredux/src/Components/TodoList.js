import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../store/action/action";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTodo: ""
    };
  }

  handleNewTodo = event => {
    console.log(event.target.value);
    this.setState({
      newTodo: event.target.value
    });
  };

  //   //ADD BUTTON TO ADD TODO
  //   submitForm = event => {
  //     event.preventDefault();
  //     console.log("clicked Add");
  //   };

  addTodoHandler = event => {
    event.preventDefault();
    this.props.dispatch(addTodo(this.state.newTodo));
  };

  render() {
    return (
      <div>
        <form
          className="Container"
          id="todoForm"
          onSubmit={event => this.addTodoHandler(event)}
        >
          <input
            type="text"
            placeholder="Add Todo"
            value={this.state.newTodo}
            onChange={event => this.handleNewTodo(event)}
          />
          <button type="submit">Add</button>
          <ul>
            {this.props.todos.map((todo, index) => {
              return <li key={index}>{todo}</li>;
            })}
          </ul>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodoList);
