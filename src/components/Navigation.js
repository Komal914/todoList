import WorkMode from "./WorkMode";
import logo from "../coffeeLogo.png";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <img src={logo} className="Logo" />
      <WorkMode></WorkMode>
    </Fragment>
  );
};

export default Navigation;
