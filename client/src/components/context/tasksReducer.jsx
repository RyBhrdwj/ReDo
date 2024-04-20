export default function tasksReducer(state, action) {
  switch (action.type) {
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TASK":
      console.log("Add request");
      // fetch("http://127.0.0.1:3001/api/post", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(action.payload),
      // })
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      fetch("http://127.0.0.1:3001/api/delete/" + action.payload, {
        method: "DELETE",
      });
      // Todo: Handle response from server here
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task,
        ),
      };
    default:
      return state;
  }
}
