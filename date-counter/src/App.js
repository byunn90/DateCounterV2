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
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  const [sliderValue, setSliderValue] = useState(0);

  // Date Variables
  const currentDate = new Date();
  // Update for dates
  const updatedDate = addDays(addMonths(currentDate, month - 1), day - 1);
  // Formate for the dates
  const formattedDate = format(updatedDate, "dd MMMM yyyy");

  const handleStepChange = (increment) => {
    // if (sliderValue !== 0) {
    //   setDay((setDay) => setDay + sliderValue); // Increment day by the value of the slider
    // } else {
    setDay((d) => d + increment);
    // }
  };
  const handleCountChange = (increament) => {
    setMonth((m) => m + increament);
  };

  function handleSliderChange(e) {
    const value = parseInt(e.target.value, 10);
    setSliderValue(value);
  }
  // Reset Button for dates and count
  function resetButton() {
    setDay(1);
    setMonth(1);
    setSliderValue(0);
  }

  return (
    <div>
      <div className="slider">
        <input
          type="range"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <p>{sliderValue}</p>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            sliderValue !== 0
              ? handleStepChange(-sliderValue)
              : handleStepChange(-1)
          }
        >
          -
        </button>
        <span>Step: {day}</span> {/* Use 'day' variable */}
        <button
          onClick={() =>
            sliderValue !== 0
              ? handleStepChange(sliderValue)
              : handleStepChange(1)
          }
        >
          +
        </button>
      </div>
      <div className="button2">
        <button onClick={() => handleCountChange(-1)}>-</button>
        <span>Count: {month}</span> {/* Use 'month' variable */}
        <button onClick={() => handleCountChange(1)}>+</button>
      </div>
      <div className="date">
        <span>{formattedDate}</span>
      </div>
      <div className="btnReset">
        <button onClick={resetButton}>Reset</button>
      </div>
    </div>
  );
}
