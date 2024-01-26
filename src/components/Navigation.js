import WorkMode from "./WorkMode";
import { ReactComponent as Coffee } from "../mug-hot-alt_6349588.svg";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <Coffee className="Logo"></Coffee>
      <WorkMode></WorkMode>
    </Fragment>
  );
};

export default Navigation;
