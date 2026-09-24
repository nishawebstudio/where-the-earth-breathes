import Sunrise from "./components/Sunrise";
import WaterSection from "./components/WaterSection";
import ForestSection from "./components/ForestSection";

export default function App(){
  return(
    <main>
      <Sunrise />
      <div className="main">
        <WaterSection />
        <ForestSection />
      </div>
    </main>
  )
}