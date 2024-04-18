import Section from './section';

export default function Quadrant() {

  const section_data = [
    {title: "IMPORTANT AND URGENT", color: "bg-red-500"},
    {title: "IMPORTANT", color: "bg-yellow-500"},
    {title: "URGENT", color: "bg-blue-500"},
    {title: "NONE", color: "bg-green-500"}
  ]

  const renderSections = (data) => {
    return data.map((section, index) => {
      return <Section key={index} title={section.title} color={section.color}/>
    })
  }
    
  return (
    <div className="overflow-hidden box-border h-full w-full max-w-[2000px] m-auto bg-stone-900 grid grid-cols-2 grid-rows-2 gap-2 p-2">
      {renderSections(section_data)}
    </div>
  );
  
  
}
