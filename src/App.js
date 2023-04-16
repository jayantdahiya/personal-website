import "./App.css";
import Links from "./Components/Links";
import Landing from "./Components/Landing";

function App() {
  return (
    <div className="bg-gradient-to-b from-sky-400 to-sky-200 h-screen font-WorkSans">
      <div className="flex items-center h-screen flex-col bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 bg-gray-400">
        <div className="w-screen lg:w-[40vw] mt-[10vh] lg:mt-[15vh]">
          <Landing />
          <Links />
        </div>
        <div className="fixed bottom-3">
          <a
            href="/"
            className="group text-gray-600 text-xl font-normal transition duration-300"
          >
            Mail<span className="text-gray-900 font-bold"> &#8599;</span>
            <span className="link_underline"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
