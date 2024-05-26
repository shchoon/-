import AlertLeft from "./alert/AlertLeft";
import AlertTop from "./alert/AlertTop";
import AlertRight from "./alert/AlertRight";
import AlertBottom from "./alert/AlertBottom";

import "../css/alert.css";
import { useEffect, useState } from "react";

export default function Alert() {
  const [array, setArray] = useState<string[]>([]);

  const showAlert = (title: string) => {
    setArray((prev) => [...prev, title + " Hello Modal"]);
  };

  useEffect(() => {
    if (array.length > 0) {
      const intervalId = setInterval(() => {
        setArray((prevArray) => {
          if (prevArray.length > 0) {
            return prevArray.slice(0, -1);
          } else {
            return prevArray;
          }
        });
      }, 1000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [array]);

  return (
    <>
      <div className="alert_box">
        <div className="alert_container">
          <div className="alert_left_box">
            <AlertLeft showAlert={showAlert} />
          </div>
          <div className="alert_top_box">
            <AlertTop showAlert={showAlert} />
          </div>
          <div className="alert_right_box">
            <AlertRight showAlert={showAlert} />
          </div>
          <div className="alert_bottom_box">
            <AlertBottom showAlert={showAlert} />
          </div>
        </div>
      </div>
      <div className="alert">
        {array.map((data, i) => {
          return <div key={i}>{data}</div>;
        })}
      </div>
    </>
  );
}
