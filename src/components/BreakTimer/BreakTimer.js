import useSound from "use-sound";
import { useTimer } from "react-timer-hook";
import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import alarm from "../../assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav";
import "./breakTimer.css";

const BreakTimer = ({ expiryTimestamp }) => {
  const { setOnBreak, onBreak } = useContext(WorkModeContext); //state variables from context

  const [play] = useSound(alarm);

  const { seconds, minutes } = useTimer({
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
          {minutes}:{seconds}
        </p>
      </div>
      <button className="CloseBreakTimer" onClick={handleBreak}>
        Session Complete
      </button>
    </div>
  );
};

export default BreakTimer;
