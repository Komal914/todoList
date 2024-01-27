import { useState } from "react";

const WorkMode = () => {
  const [workMode, setWorkMode] = useState(false);

  const workModeHandler = () => {
    setWorkMode(!workMode);
  };

  return (
    <div
      className={workMode ? "WorkOn WorkModeButton" : "WorkModeButton WorkOff"}
      onClick={workModeHandler}
    >
      Work Mode {workMode ? "On" : "Off"}
    </div>
  );
};

export default WorkMode;
