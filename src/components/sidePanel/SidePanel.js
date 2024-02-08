import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import { MobileModeContext } from "../../context/MobileModeContext";
import WorkModeButton from "../WorkModeButton/WorkModeButton";
import PomodoroTimer from "../PomodoroTimer/PomodoroTimer";
import "./sidePanel.css";

const SidePanel = () => {
  const { workMode } = useContext(WorkModeContext);
  const { mobile } = useContext(MobileModeContext);

  //for timer 50 mins
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 3000);

  return (
    <div
      className={!mobile ? "SidePanelContainer" : "SidePanelContainerMobile"}
    >
      {!mobile ? (
        <div className={workMode ? "SidePanel SidePanelOpen" : "SidePanel"}>
          <PomodoroTimer expiryTimestamp={expiryTimestamp}></PomodoroTimer>
        </div>
      ) : (
        <div>
          <PomodoroTimer expiryTimestamp={expiryTimestamp}></PomodoroTimer>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
