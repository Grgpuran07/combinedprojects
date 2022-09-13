import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Draggable from "./Pages/Draggable";
import Candycrush from "./Pages/candycrush/Candycrush";
import UseLayout from "./Pages/useLayout/useLayout";
import UseEffect from "./Pages/useLayout/useEffect";
import Tiktactoe from "./TikTacToe/Tiktactoe";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Draggable /> */}
      {/* <Candycrush /> */}
      {/* <UseLayout /> */}
      {/* <UseEffect /> */}
      <Tiktactoe />
    </div>
  );
}

export default App;
