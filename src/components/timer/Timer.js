import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "react-timer-hook";
import "./timer.css";

const Timer = () => {
  const { setOnBreak } = useContext(WorkModeContext);

  // custom timer hook
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 10);
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
    onExpire: () => {
      console.warn("onExpire called");
      console.log("time for your 10 min break ");
      const time = new Date();
      time.setSeconds(time.getSeconds() + 600);
      setOnBreak(true);
      restart(time);
    },
  });

  return (
    <div className="Timer-Container">
      <div className="Timer">
        <div style={{ fontSize: "1.3rem" }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      <div className="TimerButtons">
        {isRunning ? (
          <FontAwesomeIcon className="click" icon={faPause} onClick={pause} />
        ) : (
          <FontAwesomeIcon className="click" icon={faPlay} onClick={resume} />
        )}
        <FontAwesomeIcon className="click" icon={faMusic} />
      </div>
    </div>
  );
};

export default Timer;