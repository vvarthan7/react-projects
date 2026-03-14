import "./App.css";
import Accordion from "./components/accordion";
import RandomColorGenerator from "./components/randomcolorgenerator";

function App() {
  return (
    <div className="flex flex-col ">
      <Accordion />
      <RandomColorGenerator />
    </div>
  );
}

export default App;
