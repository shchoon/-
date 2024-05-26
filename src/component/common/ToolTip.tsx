import {
  FaCaretLeft,
  FaCaretUp,
  FaCaretRight,
  FaCaretDown,
} from "react-icons/fa";

import "../../css/toolTip.css";

interface IProps {
  direction: string;
}

export default function ToolTip({ direction }: IProps) {
  return (
    <div className="toolTip_box">
      <div className="toolTip_content">
        <span>prompt text</span>
        <span>prompt text</span>
        <span>prompt text</span>
      </div>
      {direction === "left" && <FaCaretLeft className="arrow_left" />}
      {direction === "up" && <FaCaretUp className="arrow_up" />}
      {direction === "right" && <FaCaretRight className="arrow_right" />}
      {direction === "down" && <FaCaretDown className="arrow_down" />}
    </div>
  );
}
