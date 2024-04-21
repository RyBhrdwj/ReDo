import { useState, useContext } from "react";
import { TasksContext } from "../context/tasksContext";
import { v4 as uuidv4 } from "uuid";
import TaskCard from "./TaskCard";
import CreateTaskCard from "./CreateTaskCard";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function Section({ title, color, flag, onClick }) {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const { tasks, dispatch } = useContext(TasksContext);
  const data = tasks || [];

  const filteredData = data.filter((task) => task.flag === flag);

  return (
    <div
      className={` border-1 relative min-h-0 min-w-0 rounded-xl border-white ${color} overflow-hidden`}
      onClick={onClick}
    >
      <h1 className=" text-center text-3xl font-bold text-stone-900">
        {title}
      </h1>
      <div className="mx-auto h-[90%] w-[99%] overflow-hidden rounded-xl bg-white/10">
        <CreateTaskCard
          section={flag}
          show={showCreateTask}
          setShow={setShowCreateTask}
        />
        <div className=" h-full w-full overflow-y-auto overflow-x-hidden">
          {filteredData.map((task) => (
            <TaskCard key={task._id} task={task} />
          ))}
        </div>
      </div>
      <button
        className={
          "absolute bottom-8 right-8 z-10 rounded-full border-2 border-solid border-white p-2 hover:brightness-95 " +
          (showCreateTask ? "bg-red-500" : "bg-green-500")
        }
        onClick={(e) => {
          e.stopPropagation();
          setShowCreateTask(!showCreateTask);
        }}
      >
        <PlusIcon
          className={`h-7 w-7 text-white transition-all duration-300 ${showCreateTask ? "rotate-45" : "rotate-0"}`}
        />
      </button>
    </div>
  );
}
