import { FaCaretUp } from "react-icons/fa";
import "../../css/Normal/ToolTip/NormalDown.css";

interface IProps {
  toolTipClass: string;
  arrowClass: string;
}

export default function ToolTipDown({ toolTipClass, arrowClass }: IProps) {
  return (
    <>
      <div className={toolTipClass}>
        <div className="toolTip_box">
          <span>prompt text</span>
          <span>prompt text</span>
          <span>prompt text</span>
        </div>
      </div>
      <FaCaretUp className={arrowClass} />
    </>
  );
}
