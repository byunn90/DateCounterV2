import React, { useState } from "react";
import "./styles.css";
import { addDays, addMonths, format } from "date-fns";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  // Usestates Days and Month
  const [day, setDay] = useState(23);
  const [month, setMonth] = useState(1);

  // Date Variables
  const currentDate = new Date();
  // Update for dates
  const updatedDate = addDays(addMonths(currentDate, month - 1), day - 1);
  // Formate for the dates
  const formattedDate = format(updatedDate, "dd MMMM yyyy");

  const handleStepChange = (increament) => {
    setDay((d) => d + increament);
  };

  const handleCountChange = (increament) => {
    setMonth((m) => m + increament);
  };

  return (
    <div>
      <div className="buttons">
        <button onClick={() => handleStepChange(-1)}>-</button>
        <span>Step: {setDay}</span>
        <button onClick={() => handleStepChange(1)}>+</button>
      </div>
      <div className="button2">
        <button onClick={() => handleCountChange(-1)}>-</button>
        <span>Count: {setMonth}</span>
        <button onClick={() => handleCountChange(1)}>+</button>
      </div>
      <div className="date">
        <span>{formattedDate}</span>
        <form>
          {/* setting up form input for date counter for tommorrow */}
          <input
            type="text"
            placeholder=""
            value={""}
            onChange={(e) => {}}
          ></input>
        </form>
      </div>
    </div>
  );
}
