import { useState, useContext } from "react";
import { TasksContext } from "../context/tasksContext";

export default function TaskCard({ task }) {
  const { dispatch } = useContext(TasksContext);

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch({ type: "DELETE_TASK", payload: task._id });
  };
  const [mode, setMode] = useState("VIEW"); // view, edit

  switch (mode) {
    case "VIEW":
      return (
        <div
          className={`flex flex-col m-2 items-center justify-center rounded-2xl bg-red-100 p-2 transition-transform hover:scale-[103%]`}
          onClick={(e) => handleDelete(e)}
        >
          <h1 className=" text-lg text-black">{task.name}</h1>
        </div>
      );

    // create and edit mode will be same except for the button text and action
    case "CREATE":
      return <div></div>;
    case "EDIT":
      return <div></div>;
  }
}
