import { FaCaretLeft } from "react-icons/fa";
import "../../css/Normal/ToolTip/NormalRight.css";

interface IProps {
  toolTipClass: string;
  arrowClass: string;
}

export default function ToolTipRight({ toolTipClass, arrowClass }: IProps) {
  return (
    <div className={toolTipClass}>
      <div className={arrowClass}>
        <FaCaretLeft className="arrow_horizon" />
      </div>
      <div className="toolTip_box">
        <span>prompt text</span>
        <span>prompt text</span>
        <span>prompt text</span>
      </div>
    </div>
  );
}
