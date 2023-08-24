import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";
import Background from "./Components/Background";
import Interact from "./Components/Interact";

function App() {
  return (
    <div className="h-screen bg-black select-none font-WorkSans">
      <div className="absolute z-50 flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 bg-transparent top-1/2 left-1/2">
        <div className="w-screen lg:w-[40vw] max-h-[70vh] h-screen">
          <Landing />
          <Links />
          <Interact />
        </div>
      </div>
      <Background />
    </div>
  );
}

export default App;
