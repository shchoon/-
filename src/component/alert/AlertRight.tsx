import { useState } from "react";

import { FaCaretLeft } from "react-icons/fa";

interface IProps {
  showAlert: (tite: string) => void;
}

export default function AlertRight({ showAlert }: IProps) {
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
      Right
      {isHover && (
        <>
          <div className="alert_arrow_right">
            <FaCaretLeft
              style={{ color: "#0dcaf0", width: "5px", height: "20px" }}
            />
          </div>
          <div className="alert_right">
            <div className="alert_main">
              <div>Please click if you want alert!</div>
              <button
                style={{ margin: "auto" }}
                onClick={() => {
                  showAlert("Right");
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
