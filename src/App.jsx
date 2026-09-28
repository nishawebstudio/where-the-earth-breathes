import Sunrise from "./components/Sunrise";
import EarthIsAlive from "./components/EarthIsAlive";

export default function App(){
  return(
    <main>
      <Sunrise />
      <div className="main">
        <EarthIsAlive />
      </div>
    </main>
  )
}