import { FaCaretDown } from "react-icons/fa";
import "../../css/Normal/ToolTip/NormalTop.css";
import "../../css/Scroll/ToolTip/ScrollTop.css";
import "../../css/timer.css";

interface IProps {
  toolTipClass: string;
  arrowClass: string;
}

export default function ToolTipTop({ toolTipClass, arrowClass }: IProps) {
  return (
    <>
      <div className={toolTipClass}>
        <div className="toolTip_box">
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </div>
      </div>
      <FaCaretDown className={arrowClass} />
    </>
  );
}
