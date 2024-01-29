import { Fragment, useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import WorkModeButton from "../WorkModeButton";
import logo from "../../coffeeLogo.png";
import SidePanel from "../SidePanel";
import "./navigation.css";

const Navigation = () => {
  const { workMode } = useContext(WorkModeContext);
  return (
    <Fragment>
      <img src={logo} className="Logo" />
      <WorkModeButton></WorkModeButton>
      {workMode ? <SidePanel></SidePanel> : null}
    </Fragment>
  );
};

export default Navigation;
