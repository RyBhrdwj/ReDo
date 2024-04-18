export default function Section({ title, color }) {
  return (
    <div
      className={` border-1 min-h-0 min-w-0 rounded-lg border-white ${color}`}
    >
      <h1 className=" text-center text-4xl font-bold text-stone-900">
        {title}
      </h1>
    </div>
  );
}
