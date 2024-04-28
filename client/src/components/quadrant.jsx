import { useState, useContext } from "react";
import Section from "./section";
import { TasksContext } from "../context/tasksContext";

export default function Quadrant() {
  const { dispatch, focusSection, tasks } = useContext(TasksContext);

  const section_data = [
    {
      title: "IMPORTANT AND URGENT",
      color: "bg-red-500",
      flag: 4,
    },
    {
      title: "IMPORTANT",
      color: "bg-lime-500",
      flag: 3,
    },
    {
      title: "URGENT",
      color: "bg-indigo-500",
      flag: 2,
    },
    {
      title: "NONE",
      color: "bg-neutral-500",
      flag: 1,
    },
  ];

  const gridTemplates = [
    { columns: "1fr 1fr", rows: "1fr 1fr" },
    { columns: "1fr 0fr", rows: "1fr 0fr" },
    { columns: "0fr 1fr", rows: "1fr 0fr" },
    { columns: "1fr 0fr", rows: "0fr 1fr" },
    { columns: "0fr 1fr", rows: "0fr 1fr" },
  ];

  const handleSectionClick = (index) => {
    const newFocus = focusSection === index + 1 ? 0 : index + 1;
    dispatch({ type: "SET_FOCUS_SECTION", payload: newFocus });
  };

  const renderSections = (data) => {
    return data.map((section, index) => {
      return (
        <Section
          key={index}
          title={section.title}
          color={section.color}
          flag={index + 1}
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
        gridTemplateColumns: gridTemplates[focusSection].columns,
        gridTemplateRows: gridTemplates[focusSection].rows,
        gap: focusSection ? "0" : "0.5rem",
      }}
    >
      {renderSections(section_data)}
    </div>
  );
}
