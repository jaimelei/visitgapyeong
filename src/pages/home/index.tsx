import ScreenGate from "../../components/layout/ScreenGate";
import Arrival from "./components/Arrival";
import Exists from "./components/Exists";

export default function HomePage() {
  return (
    <>
      <ScreenGate />

      <div className="hidden lg:block">
        <Arrival />
        <Exists />
      </div>
    </>
  );
}


