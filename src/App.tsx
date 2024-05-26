import React from "react";
import "./App.css";
import Normal from "./component/Noraml";
import Scroll from "./component/Scroll";
import Timer from "./component/Timer";
import Modal from "./component/Modal";
import Custom from "./component/Custom";
import State from "./component/State";

function App() {
  return (
    <div className="App">
      <Normal />
      <Scroll />
      <Timer />
      <Modal />
      <Custom />
      <State />
    </div>
  );
}

export default App;
