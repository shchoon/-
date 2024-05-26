import ToolTipTop from "../common/ToolTipTop";
import "../../css/timer.css";
import { useState } from "react";

interface IProps {
  time: number;
}

export default function EnterDelay({ time }: IProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  let timer: ReturnType<typeof setTimeout> = null;
  const toolTipData = {
    title: "enter-delay",
    className: "enter_delay",
    arrowClass: "enter_arrow",
  };

  const startTimer = () => {
    timer = setTimeout(() => {
      setIsHover(true);
    }, time * 1000);
  };

  const stopTimer = () => {
    setIsHover(false);
    if (timer) {
      clearTimeout(timer);
    }
    timer = null;
  };

  return (
    <button
      className="enter_box"
      onMouseEnter={() => {
        startTimer();
        console.log(timer);
      }}
      onMouseLeave={() => {
        stopTimer();
        console.log(timer);
      }}
    >
      {toolTipData.title} {time}s
      {isHover && (
        <ToolTipTop
          toolTipClass={toolTipData.className}
          arrowClass={toolTipData.arrowClass}
        />
      )}
    </button>
  );
}
