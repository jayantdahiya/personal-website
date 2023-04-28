import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { CameraControls } from "@react-three/drei";
import { Float } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen bg-black font-WorkSans">
      <div className="absolute z-50 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2">
        <div className="w-screen lg:w-[40vw] max-h-[70vh] h-screen">
          <Landing />
          <Links />
        </div>
      </div>
      <div className="relative h-screen">
        <Canvas>
          <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={2}
            floatingRange={[0.5, 1]}
          >
            <Stars
              radius={30}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
              fade
              speed={0.3}
            />
          </Float>
          <CameraControls />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
