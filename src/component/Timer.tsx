import "../css/timer.css";
import EnterDelay from "./action/EnterDelay";
import LeaveDelay from "./action/LeaveDelay";
import Hover from "./action/Hover";

export default function Timer() {
  return (
    <div className="timer_box">
      <EnterDelay time={2} />
      <LeaveDelay time={1} />
      <Hover time={0.5} />
    </div>
  );
}
