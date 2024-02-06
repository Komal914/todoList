import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import WorkModeButton from "../WorkModeButton/WorkModeButton";
import logo from "../../assets/coffeeLogo.png";
import SidePanel from "../sidePanel/SidePanel";
import "./navigation.css";

const Navigation = () => {
  const { workMode } = useContext(WorkModeContext);
  return (
    <div className="Navigation">
      <img alt="coffee logo" src={logo} className="Logo"></img>
      <WorkModeButton></WorkModeButton>
      {workMode ? <SidePanel></SidePanel> : null}
    </div>
  );
};

export default Navigation;
