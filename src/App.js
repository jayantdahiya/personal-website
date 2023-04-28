import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen bg-black font-WorkSans">
      <div className="absolute z-50 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2">
        <div className="w-screen lg:w-[40vw] max-h-[70vh]">
          <Landing />
          <Links />
        </div>
      </div>
      <div className="relative h-screen">
        <Canvas>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            fade
            speed={0.3}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
