import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import useSound from "use-sound";
import alarm from "../../assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { useTimer } from "react-timer-hook";
import "./timer.css";

const Timer = () => {
  const { setOnBreak, onBreak, setWorkMode, workMode } =
    useContext(WorkModeContext); //state variables

  //customer sound hook -> alarm sound
  const [play, { stop }] = useSound(alarm);

  // custom timer hook
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
    onExpire: () => {
      console.warn("onExpire called");
      console.log("time for your 10 min break ");
      setWorkMode(!workMode);
      setOnBreak(!onBreak);
      play();
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
