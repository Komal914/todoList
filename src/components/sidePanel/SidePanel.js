import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import { MobileModeContext } from "../../context/MobileModeContext";
import WorkModeButton from "../WorkModeButton/WorkModeButton";
import Timer from "../timer/Timer";
import "./sidePanel.css";

const SidePanel = () => {
  const { workMode } = useContext(WorkModeContext);
  const { mobile } = useContext(MobileModeContext);

  return (
    <div
      className={!mobile ? "SidePanelContainer" : "SidePanelContainerMobile"}
    >
      {!mobile ? (
        <div className={workMode ? "SidePanel SidePanelOpen" : "SidePanel"}>
          <Timer></Timer>
        </div>
      ) : (
        <div>
          <Timer></Timer>
        </div>
      )}
    </div>
  );
};

export default SidePanel;
