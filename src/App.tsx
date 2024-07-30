import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ModeButton from "./components/modeButton/ModeButton";

function App() {
  const [count, setCount] = useState(5);

  return (
    <>
      <div>
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Git</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <ModeButton></ModeButton>
      </div>
    </>
  );
}

export default App;
