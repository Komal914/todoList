import { useState } from "react";

const WorkMode = () => {
  const [workMode, setWorkMode] = useState("false");

  const workModeHandler = () => {
    setWorkMode(!workMode);
  };

  return (
    <div className="WorkModeButton" onClick={workModeHandler}>
      Work Mode {workMode ? "on" : "off"}
    </div>
  );
};

export default WorkMode;
