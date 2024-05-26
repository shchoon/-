import { useState } from "react";
import ToolTipTop from "../common/ToolTipTop";

import "../../css/timer.css";

interface IProps {
  time: number;
}

export default function Hover({ time }: IProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  let timer: ReturnType<typeof setTimeout> = null;
  const toolTipData = {
    title: "hover-not-hidden",
    className: "hover_not_hidden",
    arrowClass: "hover_arrow",
    behavior: "hover",
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
      {toolTipData.title}
      {isHover && (
        <ToolTipTop
          toolTipClass={toolTipData.className}
          arrowClass={toolTipData.arrowClass}
        />
      )}
    </button>
  );
}
