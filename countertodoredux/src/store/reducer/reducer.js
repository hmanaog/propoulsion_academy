const initialState = {
  counter: 0,
  todos: ["Learn Redux", "Master React"]
};

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case "increment":
      console.log("inc");
      console.log(state.counter);
      return {
        ...state,
        counter: state.counter + 1
      };

    case "decrement":
      console.log("dec");
      console.log(state.counter);
      return {
        ...state,
        counter: state.counter - 1
      };

    case "ADD_TODO":
      console.log("reducer ", action.payload);
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
