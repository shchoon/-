import AlertLeft from "./alert/AlertLeft";
import AlertTop from "./alert/AlertTop";
import AlertRight from "./alert/AlertRight";
import AlertBottom from "./alert/AlertBottom";

import "../css/alert.css";
import { useEffect, useState } from "react";

export default function Alert() {
  const [array, setArray] = useState([]);

  const showAlert = (title: string) => {
    setArray((prev) => [...prev, title + " Alert Button"]);
  };

  /* if (alertList.length > 0) {
    setTimeout(() => {
      const newAlertList = alertList.slice(1, alertList.length);
      setAlertList(newAlertList);
    }, 3000);
  } */
  /* useEffect(() => {
    setTimeout(() => {
      const newAlertList = alertList.slice(1, alertList.length);
      setAlertList(newAlertList);
    }, 3000);
  }, [alertList]); */
  //const [array, setArray] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setArray((prevArray) => {
        if (prevArray.length > 0) {
          return prevArray.slice(0, -1); // 배열의 마지막 요소를 제거
        } else {
          clearInterval(intervalId); // 배열이 비면 interval 정지
          return prevArray;
        }
      });
    }, 2000);

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 interval 정지
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
          return <div>{data}</div>;
        })}
      </div>
    </>
  );
}
