import React, { useContext, useState } from "react";
import { TasksContext } from "../context/tasksContext";
// import DatetimePicker from 'react-datetime-picker';

export default function CreateTaskCard({ section, show }) {
  const { dispatch, focusSection } = useContext(TasksContext);
  const [taskName, setTaskName] = useState("");
  // const [dateTime, setDateTime] = useState(new Date());

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  // const handleDateTimeChange = (newDateTime) => {
  //     setDateTime(newDateTime);
  // };

  const handleAddTask = (e) => {
    e.stopPropagation();
    if (!taskName.trim()) {
      alert("Please enter a task name");
      return;
    }
    dispatch({
      type: "ADD_TASK",
      payload: {
        name: taskName.trim(),
        flag: section,
        // datetime: dateTime
      },
    });

    // Reset input fields after adding task
    setTaskName("");
    // setDateTime(new Date());
  };

  return (
    show && (
      <div
        className=" relative w-full rounded-lg bg-white/10 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type="text"
          placeholder="Enter task name"
          value={taskName}
          onChange={handleTaskNameChange}
          className="w-full rounded-lg bg-white/20 p-2 text-black placeholder-white/50 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-opacity-50"
        />
        {/* <DatetimePicker
                onChange={handleDateTimeChange}
                value={dateTime}
            /> */}
        <button
          className="duration-2 right-16 mt-2 rounded-lg bg-white/60 p-2 font-semibold text-black outline outline-2 outline-white/70 transition-all ease-in-out hover:rounded-3xl  hover:bg-green-500 hover:text-white"
          onClick={(e) => {
            handleAddTask(e);
          }}
        >
          Add Task
        </button>
      </div>
    )
  );
}
