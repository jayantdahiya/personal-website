import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";
import Background from "./Components/Background";
import Interact from "./Components/Interact";

function App() {
  return (
    <>
      {/* <div className="flex max-h-screen select-none h-fit font-WorkSans">
        <div className="m-auto">
          <div className="w-screen lg:w-[40vw] max-h-[70vh] h-screen">
            <Landing />
            <Links />
            <Interact />
          </div>
        </div>
        <Background />
      </div> */}
      <div className="relative flex items-center w-screen h-screen">
        <div className="absolute bg-black">
          <Background />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex-col max-w-xl">
            <Landing />
            <Links />
            <Interact />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
