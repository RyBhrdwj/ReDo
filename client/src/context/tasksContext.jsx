import { createContext, useState, useEffect, useReducer } from "react";
import tasksReducer from "./tasksReducer";
import api from "./api";

const { getAllTasks } = api;

export const TasksContext = createContext([]);

const TasksContextProvider = ({ children }) => {
  const initialState = {
    tasks: [],
    focusSection: 0,
  };
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  useEffect(() => {
    console.log("Fetching tasks...");
    getAllTasks()
      .then((data) => {
        dispatch({ type: "GET_TASKS", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []); // Initially fetch tasks

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        focusSection: state.focusSection,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
