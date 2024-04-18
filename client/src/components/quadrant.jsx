import { useState } from "react";
import Section from "./section";

export default function Quadrant() {
  const section_data = [
    { title: "IMPORTANT AND URGENT", color: "bg-red-500" },
    { title: "IMPORTANT", color: "bg-yellow-500" },
    { title: "URGENT", color: "bg-blue-500" },
    { title: "NONE", color: "bg-green-500" },
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
