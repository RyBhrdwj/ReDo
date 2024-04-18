import { useState } from "react";
import Section from "./section";

export default function Quadrant() {
  const section_data = [
    { title: "IMPORTANT AND URGENT", color: "bg-red-500" },
    { title: "IMPORTANT", color: "bg-yellow-500" },
    { title: "URGENT", color: "bg-blue-500" },
    { title: "NONE", color: "bg-green-500" },
  ];

  // define grid format presets
  const gridFormat = [
    "grid-cols-2 grid-rows-2 gap-2",
    "grid-cols-Preset1 grid-rows-Preset2",
    "grid-cols-Preset2 grid-rows-Preset2",
    "grid-cols-Preset1 grid-rows-Preset1",
    "grid-cols-Preset2 grid-rows-Preset1",
  ];

  const [focus, setFocus] = useState(0); // 0 -> no focus ; 1 -> important and urgent ; 2 -> important ; 3 -> urgent ; 4 -> none
  console.log(focus);

  const renderSections = (data) => {
    return data.map((section, index) => {
      return (
        <Section
          key={index + 1}
          title={section.title}
          color={section.color}
          onClick={() => setFocus(focus ? 0 : index + 1)}
        />
      );
    });
  };

  const style =
    "m-auto box-border grid h-full w-full max-w-[2000px] overflow-hidden bg-stone-900 p-2 ";

  return (
    <div className={style + gridFormat[focus]}>
      {renderSections(section_data)}
    </div>
  );
}
