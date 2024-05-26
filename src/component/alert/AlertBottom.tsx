import { useState } from "react";

import { FaCaretUp } from "react-icons/fa";

interface IProps {
  showAlert: (tite: string) => void;
}

export default function AlertBottom({ showAlert }: IProps) {
  const [isHover, setIsHover] = useState<boolean>(false);
  let timer: ReturnType<typeof setTimeout> = null;

  const startTimer = () => {
    timer = setTimeout(() => {
      setIsHover(false);
    }, 1000);
  };

  const stopTimer = () => {
    setIsHover(true);
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  return (
    <button
      onMouseOver={() => {
        stopTimer();
      }}
      onMouseOut={() => {
        startTimer();
      }}
    >
      Bottom
      {isHover && (
        <>
          <div className="alert_arrow_bottom">
            <FaCaretUp style={{ color: "#0dcaf0" }} />
          </div>
          <div className="alert_bottom">
            <div className="alert_main">
              <div>Please click if you want alert!</div>
              <button
                style={{ margin: "auto" }}
                onClick={() => {
                  showAlert("Bottom");
                }}
              >
                click
              </button>
            </div>
          </div>
        </>
      )}
    </button>
  );
}
