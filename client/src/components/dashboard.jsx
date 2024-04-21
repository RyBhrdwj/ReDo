import MiniDrawer from "./drawer";
import Quadrant from "./quadrant";
import TasksContextProvider from "../context/tasksContext";

export default function Dashboard() {
  return (
    <div className="flex h-full">
      <MiniDrawer />
      <TasksContextProvider>
        <Quadrant />
      </TasksContextProvider>
    </div>
  );
}
