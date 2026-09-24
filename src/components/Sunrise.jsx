import GrassData from "../data/GrassData.js";
import BirdData from "../data/BirdData.js";
import CloudData from "../data/CloudData.js";

import NatureScene from "./NatureScene.jsx";
import Cloud from "./Cloud";

export default function Sunrise(){
    return(
        <header>
            <div className="sunrise-scene">
                <div className="sun"></div>
                <div className="mountains">
                    <div className="mountain mountain-left"></div>
                    <div className="mountain mountain-center"></div>
                    <div className="mountain mountain-right"></div>
                </div>
                <div className="ground">
                    {GrassData.map((grass) =>
                        <div key={`${grass.l}-${grass.t}`} className="grass" style={{left:`${grass.l}%`,top:`${grass.t}px`}}></div>
                    )}
                </div>
                <div className="clouds">
                    {CloudData.map((cloud) => (
                        <Cloud
                            key={`${cloud.left}-${cloud.top}`}
                            {...cloud}
                        />
                    ))}
                </div>
                <div className="birds">
                    {BirdData.map((bird) => (
                        <div
                        key={`${bird.left}-${bird.top}`}
                        className="bird"
                        style={{
                            left: bird.left,
                            top: bird.top,
                            width: bird.width,
                            height: bird.height,
                        }}
                        ></div>
                    ))}
                </div>
            </div>
            <NatureScene />
            <div className="hero">
                <h1>Where the Earth Breathes</h1>
                <p className="tagline">A quiet journey through the living world.</p>
            </div>

        </header>
    )
}