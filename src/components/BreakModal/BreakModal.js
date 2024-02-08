import BreakTimer from "../BreakTimer/BreakTimer";
import CoffeeBreak from "../../assets/coffeeBreak.png";
import "./breakModal.css";

const BreakModal = () => {
  const expiryTimestamp = new Date();
  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 600);
  return (
    <div className="BreakModalContainer">
      <div className="BreakModalHeader">
        <h1>Break Time</h1>
        <img alt="coffee logo" src={CoffeeBreak} className="Logo"></img>
      </div>
      <BreakTimer expiryTimestamp={expiryTimestamp}></BreakTimer>
    </div>
  );
};

export default BreakModal;
