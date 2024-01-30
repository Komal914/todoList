import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

import "./timer.css";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Timer-Container">
      <div className="Timer">
        <h1>{minutes}</h1>
        <h1>:</h1>
        <h1>{seconds}</h1>
      </div>
      <div className="TimerButtons">
        <FontAwesomeIcon icon={faPlay} />
        <FontAwesomeIcon icon={faMusic} />
      </div>
    </div>
  );
};

export default Timer;
