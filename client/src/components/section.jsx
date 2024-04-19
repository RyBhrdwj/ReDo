import { useContext } from "react";
import { TasksContext } from "./context/tasksContext";

export default function Section({ title, color, onClick }) {

  const { tasks, dispatch } = useContext(TasksContext);
  console.log(tasks.tasks);
  const data = tasks.tasks || [];

  return (
    <div
      className={` border-1 min-h-0 min-w-0 rounded-lg border-white ${color}`}
      onClick={onClick}
    >
      <h1 className=" text-center text-4xl font-bold text-stone-900">
        {title}
      </h1>
      {data.map((task) => (
        <div key={task._id}>{task.name}</div>
        // You can render other task details here as needed
      ))}
    </div>
  );
}
