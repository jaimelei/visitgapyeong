import ScreenGate from "../../components/layout/ScreenGate";
import Arrival from "./components/Arrival";
import Exists from "./components/Exists";
import PauseQuote from "./components/PauseQuote";
import Landscape from "./components/Landscape";
import Seasons from "./components/Seasons";
import Fragments from "./components/Fragments";
import { pause1Content, pause2Content } from "../../data/gapyeong";

export default function HomePage() {
  return (
    <>
      <ScreenGate />

      <div className="hidden lg:block">
        <Arrival />
        <Exists />
        <PauseQuote id="pause-1" content={pause1Content} />
        <Landscape />
        <Seasons />
        <PauseQuote id="pause-2" content={pause2Content} showDivider={true} />
        <Fragments />
      </div>
    </>
  );
}





