import logo from "./logo.svg";
import "./App.css";
import { Counter } from "counter";
import { Multiplier } from "multiplier";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Multiplier />
      </header>
    </div>
  );
}

export default App;
