import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./timer.css";

const Timer = () => {
  return (
    <div className="Timer-Container">
      <div className="Timer">
        <h1>10</h1>
        <h1>:</h1>
        <h1>00</h1>
      </div>
      <div className="TimerButtons">
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faMusic} />
      </div>
    </div>
  );
};

export default Timer;
