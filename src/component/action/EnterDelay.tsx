import ToolTipTop from "../common/ToolTipTop";
import "../../css/timer.css";
import { useState } from "react";

interface IProps {
  time: number;
}

export default function EnterDelay({ time }: IProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  let timer: NodeJS.Timeout | null = null;
  const toolTipData = {
    title: "enter-delay",
    className: "enter_delay",
    arrowClass: "enter_arrow",
  };

  const boxStyle = {
    backgroundColor: isHover ? "gray" : "blue",
    transition: isHover && "background-color 1s",
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
      timer = null; // 타이머 변수 초기화
    }
  };

  return (
    <button
      className="enter_box"
      style={boxStyle}
      onMouseEnter={() => {
        startTimer();
      }}
      onMouseLeave={() => {
        stopTimer();
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
