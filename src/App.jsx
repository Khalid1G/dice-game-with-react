import { useState } from "react";
import "./App.css";
import { Landing, Game } from "./components";

function App() {
  const [start, setStart] = useState(false);
  const startHandler = () => {
    setStart(true);
  };

  return (
    <div className="App">
      {start ? (
        <>
          <Game />
        </>
      ) : (
        <Landing onStart={startHandler} />
      )}
    </div>
  );
}

export default App;
