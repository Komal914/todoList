import { useContext } from "react";
import { WorkModeContext } from "../context/WorkModeContext";

const WorkMode = () => {
  const { workMode, setWorkMode } = useContext(WorkModeContext);

  const workModeHandler = () => {
    setWorkMode(!workMode);
    console.log("set: ", !workMode);
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
