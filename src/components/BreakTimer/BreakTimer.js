import useSound from "use-sound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTimer } from "react-timer-hook";
import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import alarm from "../../assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav";
import { faPlay, faPause, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./breakTimer.css";

const BreakTimer = ({ expiryTimestamp }) => {
  const { setOnBreak, onBreak } = useContext(WorkModeContext); //state variables from context

  const [play] = useSound(alarm);

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        console.warn("onExpire called");
        console.log("break timer");
        play();
      },
    });

  const handleBreak = () => {
    setOnBreak(!onBreak);
  };

  return (
    <div className="BreakTimerContainer">
      <div className="BreakTimeValues">
        <p>
          {seconds}:{minutes}
        </p>
      </div>
      <button className="CloseBreakTimer" onClick={handleBreak}>
        Session Complete
      </button>
    </div>
  );
};

export default BreakTimer;
