import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 h-screen font-WorkSans">
      <div className="flex items-center h-screen flex-col bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400">
        <div className="w-screen lg:w-[40vw] mt-[10vh] lg:mt-[15vh] max-h-[70vh]">
          <Landing />
          <Links />
        </div>
      </div>
    </div>
  );
}

export default App;
