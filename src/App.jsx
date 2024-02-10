import { useState } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Hero from "./components/Hero";

function App() {
  const [startGame, setStartGame] = useState(false);

  const toggleGamePlay = () => {
    setStartGame((prev) => !prev);
  };

  return (
    <>{startGame ? <Hero /> : <Landing toggleGamePlay={toggleGamePlay} />}</>
  );
}

export default App;
