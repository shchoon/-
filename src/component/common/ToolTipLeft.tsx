import "../../css/Normal/ToolTip/NormalLeft.css";
import "../../css/Scroll/ToolTip/ScrollLeft.css";

import { FaCaretRight } from "react-icons/fa";

interface IProps {
  toolTipClass: string;
  arrowClass: string;
}

export default function ToolTipLeft({ toolTipClass, arrowClass }: IProps) {
  return (
    <div className={toolTipClass}>
      <div className="toolTip_box">
        <span>prompt text</span>
        <span>prompt text</span>
        <span>prompt text</span>
      </div>
      <div className={arrowClass}>
        <FaCaretRight className="arrow_horizon" />
      </div>
    </div>
  );
}
