import React, { useState } from "react";
import "../css/scroll.css";

import ToolTip from "./common/ToolTip";

export default function Scroll() {
  const [toolTipTarget, setToolTipTarget] = useState<{
    x: number;
    y: number;
    targetDirection: string;
  }>({
    x: 0,
    y: 0,
    targetDirection: "",
  });

  const onMouseHandler = (x: number, y: number, diraction: string) => {
    setToolTipTarget((prev) => ({
      ...prev,
      targetDirection: diraction,
      x: x,
      y: y,
    }));
  };

  const initiailizeTarget = () => {
    setToolTipTarget((prev) => ({
      x: 0,
      y: 0,
      targetDirection: "",
    }));
  };

  const leftList = [
    {
      title: "Left Top",
    },
    {
      title: "Left",
    },
    {
      title: "Left Bottom",
    },
  ];

  const rightList = [
    {
      title: "Right Top",
    },
    {
      title: "Right",
    },
    {
      title: "Right Bottom",
    },
  ];

  const topList = [
    {
      title: "Top Left",
    },
    {
      title: "Top Center",
    },
    {
      title: "Top Right",
    },
  ];

  const bottomList = [
    {
      title: "Bottom Left",
    },
    {
      title: "Bottom Center",
    },
    {
      title: "Bottom Right",
    },
  ];

  return (
    <>
      <div className="scroll_box">
        <div className="left">
          <div className="container">
            {leftList.map((data, i) => {
              return (
                <button
                  key={i}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.ceil(rect.x) - 110;
                    const y = Math.ceil(rect.y) - 25;
                    onMouseHandler(x, y, "right");
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    initiailizeTarget();
                  }}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="horizontal">
          <div className="top">
            {topList.map((data, i) => {
              return (
                <button
                  key={i}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.ceil(rect.x);
                    const y = Math.ceil(rect.y) - 90;
                    onMouseHandler(x, y, "down");
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    initiailizeTarget();
                  }}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
          <div className="bottom">
            {bottomList.map((data, i) => {
              return (
                <button
                  key={i}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.ceil(rect.x);
                    const y = Math.ceil(rect.y) + 40;
                    onMouseHandler(x, y, "up");
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    initiailizeTarget();
                  }}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="right">
          <div className="container">
            {rightList.map((data, i) => {
              return (
                <button
                  key={i}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = Math.ceil(rect.x) + 110;
                    const y = Math.ceil(rect.y) - 25;
                    onMouseHandler(x, y, "left");
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    initiailizeTarget();
                  }}
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {toolTipTarget.targetDirection !== "" && (
        <div
          className="scroll_toolTip"
          style={{
            position: "absolute",
            top: `${toolTipTarget.y}px`,
            left: `${toolTipTarget.x}px`,
          }}
        >
          <ToolTip direction={toolTipTarget.targetDirection} />
        </div>
      )}
    </>
  );
}
