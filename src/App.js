import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";

import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function App() {
  return (
    <div className="h-screen bg-black font-WorkSans">
      <div className="absolute flex flex-col items-center h-screen bg-transparent backdrop-blur-lg">
        <div className="w-screen lg:w-[40vw] mt-[10vh] lg:mt-[15vh] max-h-[70vh]">
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
            speed={1}
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
