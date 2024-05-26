import { useState } from "react";
import ToolTipTop from "../common/ToolTipTop";

import "../../css/timer.css";

interface IProps {
  time: number;
}

export default function LeaveDelay({ time }: IProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  let timer: ReturnType<typeof setTimeout> = null;
  const toolTipData = {
    title: "leave-delay",
    className: "leave_delay",
    arrowClass: "leave_arrow",
    behavior: "leave",
  };

  const startTimer = () => {
    timer = setTimeout(() => {
      setIsHover(false);
    }, time * 1000);
  };

  const stopTimer = () => {
    setIsHover(true);
    if (timer) {
      clearTimeout(timer);
      timer = null; // 타이머 변수 초기화
    }
  };

  return (
    <button
      className="enter_box"
      onMouseOver={() => {
        stopTimer();
      }}
      onMouseOut={() => {
        startTimer();
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
