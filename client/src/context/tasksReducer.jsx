import api from "./api";

export default function tasksReducer(state, action) {
  switch (action.type) {
    case "SET_FOCUS_SECTION":
      return {
        ...state,
        focusSection: action.payload,
      };
    case "GET_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    case "ADD_TASK":
      api.postTask(action.payload);
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE_TASK":
      api.deleteTask(action.payload);
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
