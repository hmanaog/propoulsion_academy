export const increment = () => {
  console.log("Clicking sum");
  return {
    type: "increment"
  };
};

export const decrement = () => {
  console.log("Clicking sub");
  return {
    type: "decrement"
  };
};

export const addTodo = newTodo => {
  console.log("Clicking AddTodo Button");
  return {
    type: "ADD_TODO",
    payload: newTodo
  };
};
