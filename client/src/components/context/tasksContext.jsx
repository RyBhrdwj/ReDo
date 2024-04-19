import { createContext, useState, useEffect, useReducer } from "react";
import tasksReducer from "./tasksReducer";

export const TasksContext = createContext([]);

const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const [state1, setState1] = useState([]);
  const [state2, setState2] = useState([]);
  const [state3, setState3] = useState([]);
  const [state4, setState4] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:3001/api/fetch")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch tasks");
        }
        return res.json();
      })
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
        state1,
        setState1,
        state2,
        setState2,
        state3,
        setState3,
        state4,
        setState4,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
