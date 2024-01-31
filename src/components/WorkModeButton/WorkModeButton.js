import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";

const WorkModeButton = () => {
  const { workMode, setWorkMode, onBreak } = useContext(WorkModeContext);

  const workModeHandler = () => {
    setWorkMode(!workMode);
  };

  return (
    <Fragment>
      {!onBreak ? (
        <div
          className={
            workMode ? "WorkOn WorkModeButton" : "WorkModeButton WorkOff"
          }
          onClick={workModeHandler}
        >
          Work Mode
          {workMode ? " On" : " Off"}
        </div>
      ) : (
        <div style={{ color: "white" }} className="WorkModeButton">
          Break Time!
        </div>
      )}
    </Fragment>
  );
};

export default WorkModeButton;
