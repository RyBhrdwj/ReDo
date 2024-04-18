export default function Section({title, color}) {

  return (
    <div className = {`border-1 border-white rounded-lg ${color} p-2`}>
    <h1 className=" text-4xl text-center font-bold text-stone-900">
      {title}
    </h1>
    </div>
  )
}