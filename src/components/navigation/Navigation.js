import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import WorkModeButton from "../WorkModeButton/WorkModeButton";
import logo from "../../assets/coffeeLogo.png";
import SidePanel from "../sidePanel/SidePanel";
import "./navigation.css";
import { MobileModeContext } from "../../context/MobileModeContext";

const Navigation = () => {
  const { workMode } = useContext(WorkModeContext);
  const { mobile } = useContext(MobileModeContext);
  return (
    <div className={!mobile ? "Navigation" : "NavigationMobile"}>
      {!mobile ? <img alt="coffee logo" src={logo} className="Logo"></img> : ""}
      <div
        className={mobile ? "NavigationSidePanelMobile" : "NavigationSidePanel"}
      >
        <WorkModeButton></WorkModeButton>
        {workMode ? <SidePanel></SidePanel> : null}
      </div>
    </div>
  );
};

export default Navigation;
