import { useState } from "react";
import Section from "./section";

export default function Quadrant() {
  const section_data = [
    { title: "IMPORTANT AND URGENT", color: "bg-red-500" },
    { title: "IMPORTANT", color: "bg-yellow-500" },
    { title: "URGENT", color: "bg-blue-500" },
    { title: "NONE", color: "bg-green-500" },
  ];

  const [focus, setFocus] = useState(0); // 0 -> no focus ; 1 -> important and urgent ; 2 -> important ; 3 -> urgent ; 4 -> none

  const grid_templates = [
    { gridTemplateColumns: "1fr 0fr", gridTemplateRows: "1fr 0fr" },
  ];

  const renderSections = (data) => {
    return data.map((section, index) => {
      return (
        <Section key={index + 1} title={section.title} color={section.color} />
      );
    });
  };

  return (
    <div className="overflow-hidden p-2 box-border h-full w-full max-w-[2000px] m-auto bg-stone-900 grid grid-cols-2 grid-rows-2 gap-2">
      {renderSections(section_data)}
    </div>
  );
}
