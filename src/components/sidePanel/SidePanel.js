import { useContext, useState } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import Timer from "../timer/Timer";
import GetTimeForm from "../getTimeForm/GetTimeForm";
import "./sidePanel.css";

const SidePanel = () => {
  const { workMode } = useContext(WorkModeContext);
  const [deadline, setDeadline] = useState(false);

  return (
    <div className={workMode ? "SidePanel SidePanelOpen" : "SidePanel"}>
      {/* deadline ? <Timer></Timer> : <GetTimeForm></GetTimeForm> */}
      <Timer></Timer>
    </div>
  );
};

export default SidePanel;
