import { useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { v4 as uuidv4 } from "uuid";

export default function Section({ title, color, flag, onClick }) {
  const { tasks, dispatch } = useContext(TasksContext);
  const data = tasks.tasks || [];

  const filteredData = data.filter((task) => task.flag === flag);

  return (
    <div
      className={` border-1 relative min-h-0 min-w-0 rounded-lg border-white ${color} overflow-y-auto overflow-x-clip`}
      onClick={onClick}
    >
      <h1 className=" text-center text-4xl font-bold text-stone-900">
        {title}
      </h1>
      <button
        className=" absolute bottom-8 right-8 z-10 h-10 w-10 rounded-full bg-blue-300 p-2"
        onClick={(e) => {
          e.stopPropagation();
          console.log("Add task clicked");
          dispatch({
            type: "ADD_TASK",
            payload: {
              name: "New Task",
              flag: flag,
            },
          });
        }}
      >
        +
      </button>
      {filteredData.map((task) => (
        <div
          key={task._id}
          onClick={(e) => {
            console.log(task._id);
            e.stopPropagation();
            dispatch({ type: "DELETE_TASK", payload: task._id });
          }}
          className=" m-4 rounded-xl bg-red-100 p-2 text-center transition-transform hover:scale-[103%] "
        >
          {task.name}
        </div>
        // You can render other task details here as needed
      ))}
    </div>
  );
}
