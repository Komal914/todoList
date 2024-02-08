import { useTimer } from "react-timer-hook";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import { MobileModeContext } from "../../context/MobileModeContext";
import alarm from "../../assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav";
import useSound from "use-sound";
import "./pomodoroTimer.css";
import {
  faPlay,
  faVideo,
  faPause,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";

const Timer = ({ expiryTimestamp }) => {
  const { setOnBreak, onBreak, setWorkMode, workMode, musicOn, setMusicOn } =
    useContext(WorkModeContext); //state variables from context

  const { mobile } = useContext(MobileModeContext);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  //customer sound hook -> alarm sound
  const [play, { stop }] = useSound(alarm);

  // custom timer hook

  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        setWorkMode(!workMode);
        setOnBreak(!onBreak);
        play();
      },
    });

  return (
    <div className="TimerContainer">
      <div className={!mobile ? "Timer" : "Timer TimerMobile"}>
        <div style={{ fontSize: "1.3rem" }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
      </div>
      {!mobile ? (
        <div className="TimerButtons">
          {isRunning ? (
            <FontAwesomeIcon className="click" icon={faPause} onClick={pause} />
          ) : (
            <FontAwesomeIcon className="click" icon={faPlay} onClick={resume} />
          )}
          {!musicOn ? (
            <FontAwesomeIcon
              className="click"
              icon={faVideoSlash}
              onClick={toggleMusic}
            />
          ) : (
            <FontAwesomeIcon icon={faVideo} onClick={toggleMusic} />
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Timer;
