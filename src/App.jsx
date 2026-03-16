import "./App.css";
import Accordion from "./components/accordion";
import RandomColorGenerator from "./components/randomcolorgenerator";
import StarRating from "./components/starrating";

function App() {
  return (
    <div className="flex flex-col ">
      <Accordion />
      <RandomColorGenerator />
      <StarRating />
    </div>
  );
}

export default App;
