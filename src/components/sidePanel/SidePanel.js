import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import Timer from "../timer/Timer";
import "./sidePanel.css";

const SidePanel = () => {
  const { workMode } = useContext(WorkModeContext);
  return (
    <div className={workMode ? "SidePanel SidePanelOpen" : "SidePanel"}>
      <Timer></Timer>
    </div>
  );
};

export default SidePanel;
