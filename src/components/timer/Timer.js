import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import { MobileModeContext } from "../../context/MobileModeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTimer } from "react-timer-hook";
import alarm from "../../assets/mixkit-digital-clock-digital-alarm-buzzer-992.wav";
import useSound from "use-sound";
import "./timer.css";
import {
  faPlay,
  faVideo,
  faPause,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";

const Timer = () => {
  const { setOnBreak, onBreak, setWorkMode, workMode, musicOn, setMusicOn } =
    useContext(WorkModeContext); //state variables from context

  const { mobile } = useContext(MobileModeContext);

  const toggleMusic = () => {
    setMusicOn(!musicOn);
  };

  //customer sound hook -> alarm sound
  const [play, { stop }] = useSound(alarm);

  // custom timer hook
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 3000);
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => {
        console.warn("onExpire called");
        console.log("time for your 10 min break ");
        setWorkMode(!workMode);
        setOnBreak(!onBreak);
        setMusicOn(!musicOn);
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
