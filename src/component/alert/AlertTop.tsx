import { useState } from "react";

import { FaCaretDown } from "react-icons/fa";

interface IProps {
  showAlert: (tite: string) => void;
}

export default function AlertTop({ showAlert }: IProps) {
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
      Top
      {isHover && (
        <>
          <div className="alert_top">
            <div className="alert_main">
              <div>Please click if you want alert!</div>
              <button
                style={{ margin: "auto" }}
                onClick={() => {
                  showAlert("Top");
                }}
              >
                click
              </button>
            </div>
          </div>
          <div className="alert_arrow_top">
            <FaCaretDown style={{ color: "#0dcaf0" }} />
          </div>
        </>
      )}
    </button>
  );
}
