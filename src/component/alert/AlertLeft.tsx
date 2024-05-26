import { useState } from "react";
import "../../css/alert.css";
import { FaCaretRight } from "react-icons/fa";

interface IProps {
  showAlert: (tite: string) => void;
}

export default function AlertLeft({ showAlert }: IProps) {
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
      Left
      {isHover && (
        <>
          <div className="alert_left">
            <div className="alert_main">
              <div>Please click if you want alert!</div>
              <button
                style={{ margin: "auto" }}
                onClick={() => {
                  showAlert("Left");
                  console.log("a");
                }}
              >
                click
              </button>
            </div>
          </div>
          <div className="alert_arrow_left">
            <FaCaretRight
              style={{ color: "#0dcaf0", width: "5px", height: "20px" }}
            />
          </div>
        </>
      )}
    </button>
  );
}
