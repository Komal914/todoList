import { useState } from "react";
import "../timer/timer.css";

const GetTimeForm = () => {
  const [hour, setHour] = useState(0);
  const handleHour = (e) => {
    setHour(e.target.value);
  };
  return (
    <form className="Timer Container">
      <div className="Timer">
        <div style={{ fontSize: ".5rem" }}>
          <input
            id="hour"
            type="number"
            placeholder="00"
            onChange={handleHour}
          />
          :
          <input id="min" type="number" placeholder="00" />:
          <input id="sec" type="number" placeholder="00" />
        </div>
      </div>
    </form>
  );
};

export default GetTimeForm;
