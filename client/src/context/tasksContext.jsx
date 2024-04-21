import { createContext, useState, useEffect, useReducer } from "react";
import tasksReducer from "./tasksReducer";
import api from "./api";

export const TasksContext = createContext([]);

const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  useEffect(() => {
    api
      .getAllTasks()
      .then((data) => {
        dispatch({ type: "GET_TASKS", payload: data });
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        dispatch,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
