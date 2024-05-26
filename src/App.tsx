import React from "react";
import "./App.css";
import Normal from "./component/Noraml";
import Scroll from "./component/Scroll";
import Timer from "./component/Timer";
import Alert from "./component/Alert";
import Custom from "./component/Custom";
import State from "./component/State";
import ToolTip from "./component/common/ToolTip";

function App() {
  return (
    <div className="App">
      <Normal />
      <Scroll />
      <Timer />
      <Alert />
      <Custom />
      <State />
    </div>
  );
}

export default App;
