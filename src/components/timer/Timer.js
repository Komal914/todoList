import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "react-timer-hook";
import "./timer.css";

const Timer = () => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 3000);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="Timer-Container">
      <div className="Timer">
        <div style={{ fontSize: "1.1rem" }}>
          <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
          <span>{seconds}</span>
        </div>
      </div>
      <div className="TimerButtons">
        {isRunning ? (
          <FontAwesomeIcon icon={faPause} onClick={pause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} onClick={resume} />
        )}
        <FontAwesomeIcon icon={faMusic} />
      </div>
    </div>
  );
};

export default Timer;
