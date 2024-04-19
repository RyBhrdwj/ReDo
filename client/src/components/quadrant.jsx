import { useState, useContext } from "react";
import Section from "./section";
import { TasksContext } from "./context/tasksContext";

export default function Quadrant() {
  const {
    state1,
    setState1,
    state2,
    setState2,
    state3,
    setState3,
    state4,
    setState4,
  } = useContext(TasksContext);

  const section_data = [
    {
      title: "IMPORTANT AND URGENT",
      color: "bg-red-500",
      tasks: state1,
      setTasks: setState1,
    },
    {
      title: "IMPORTANT",
      color: "bg-yellow-500",
      tasks: state2,
      setTasks: setState2,
    },
    {
      title: "URGENT",
      color: "bg-blue-500",
      tasks: state3,
      setTasks: setState3,
    },
    {
      title: "NONE",
      color: "bg-green-500",
      tasks: state4,
      setTasks: setState4,
    },
  ];

  const gridTemplates = [
    { columns: "1fr 1fr", rows: "1fr 1fr" },
    { columns: "1fr 0fr", rows: "1fr 0fr" },
    { columns: "0fr 1fr", rows: "1fr 0fr" },
    { columns: "1fr 0fr", rows: "0fr 1fr" },
    { columns: "0fr 1fr", rows: "0fr 1fr" },
  ];

  const [focus, setFocus] = useState(0);

  const handleSectionClick = (index) => {
    setFocus(focus ? 0 : index + 1);
  };

  const renderSections = (data) => {
    return data.map((section, index) => {
      return (
        <Section
          key={index}
          title={section.title}
          color={section.color}
          tasks={section.tasks}
          setTasks={section.setTasks}
          onClick={() => handleSectionClick(index)}
        />
      );
    });
  };

  const style =
    "m-auto box-border grid h-[100vh] w-[100vw] max-w-[2000px] overflow-hidden bg-stone-900 p-2";
  const transition = "transition-all duration-[300ms] ease-in-out";

  return (
    <div
      className={`${style} ${transition}`}
      style={{
        gridTemplateColumns: gridTemplates[focus].columns,
        gridTemplateRows: gridTemplates[focus].rows,
        gap: focus ? "0" : "0.5rem",
      }}
    >
      {renderSections(section_data)}
    </div>
  );
}
