import TodoWrapper from "../TodoWrapper/TodoWrapper";
import BreakModal from "../BreakModal/BreakModal";
import { useContext } from "react";
import { WorkModeContext } from "../../context/WorkModeContext";
import "./todoContainer.css";
const ToDoContainer = () => {
  const { onBreak } = useContext(WorkModeContext);
  return (
    <div className="TodoContainer">
      {onBreak ? <BreakModal></BreakModal> : <TodoWrapper></TodoWrapper>}
    </div>
  );
};

export default ToDoContainer;
