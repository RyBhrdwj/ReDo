export default function Section({ title, color }) {
  return (
    <div
      className={` border-1 min-w-0 min-h-0 border-white rounded-lg ${color}`}
    >
      <h1 className=" text-4xl text-center font-bold text-stone-900">
        {title}
      </h1>
    </div>
  );
}
