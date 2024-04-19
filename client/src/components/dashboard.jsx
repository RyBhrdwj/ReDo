import MiniDrawer from "./drawer";
import Quadrant from "./quadrant";

export default function Dashboard() {
  return (
    <div className="flex h-full">
      <MiniDrawer />
      <Quadrant />
    </div>
  );
}
