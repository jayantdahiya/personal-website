import "./App.css";
import Links from "./Components/Links";
import Tabs from "./Components/Tabs";

function App() {
  return (
    <div className="flex items-center h-screen flex-col">
      <div className="w-screen lg:w-[40vw] mt-[20vh]">
        <Tabs />
        <Links />
      </div>
    </div>
  );
}

export default App;
