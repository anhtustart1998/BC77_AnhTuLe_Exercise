import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { GlassesTryOn } from "./pages/Glass";
import TinderCard from "./pages/Tinder";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GlassesTryOn />
      <TinderCard />
    </>
  );
}

export default App;
