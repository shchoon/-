import "../css/custom.css";
import { useState } from "react";

export default function Custom() {
  const color = ["pink", "yellow"];

  const [targetId, setTargetId] = useState<number>(-1);

  return (
    <div className="custom_box">
      {color.map((color, i) => {
        return (
          <button
            key={i}
            style={{ background: `${color}` }}
            onMouseEnter={() => {
              setTargetId(i);
            }}
            onMouseLeave={() => {
              setTargetId(-1);
            }}
          >
            {color}
            {targetId === i && (
              <div
                className="custom_toolTip"
                style={{ background: `${color}` }}
              >
                {color}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
}
