import ScreenGate from "../../components/layout/ScreenGate";
import Arrival from "./components/Arrival";
import Exists from "./components/Exists";
import PauseQuote from "./components/PauseQuote";
import Landscape from "./components/Landscape";
import { pause1Content } from "../../data/gapyeong";

export default function HomePage() {
  return (
    <>
      <ScreenGate />

      <div className="hidden lg:block">
        <Arrival />
        <Exists />
        <PauseQuote id="pause-1" content={pause1Content} />
        <Landscape />
      </div>
    </>
  );
}




