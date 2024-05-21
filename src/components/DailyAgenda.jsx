import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Aula from "./Aula";

export default function DailyAgenda({
  classes,
  link,
  addBookingCallback,
}) {
  const [index, setDay] = useState(0);

  const weekDays = {
    0: "Sun",
    1: "Mon",
    2: "Tue",
    3: "Wed",
    4: "Thu",
    5: "Fri",
    6: "Sat",
  };

  const changeDay = (amount) => {
    setDay((prevIndex) => {
      const newIndex = (prevIndex + amount + 30) % 30;
      return newIndex;
    });
  };

  // Helper to calculate grid row based on time
  const timeToGridRow = (time) => {
    const [hour, modifier] = time.split(" ");
    let hourNumber = parseInt(hour, 10);
    if (modifier === "PM" && hourNumber !== 12) {
      hourNumber += 12;
    }
    return hourNumber - 7; // Grid starts at 8 AM, adjust accordingly
  };

  // Styling for the grid container
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "auto 1fr", // "auto" for the hour column and "1fr" for the class column
    gap: "2px",
    gridAutoRows: "3rem", // Match row height for hours and classes
  };

  return (
    <div className="mt-3 bg-white rounded-lg p-2">
      {/* Day and month display */}
      <div className="flex justify-center items-center h-12 px-4 space-x-4">
        <button onClick={() => changeDay(-1)}>
          <FontAwesomeIcon icon={faArrowLeft} className="text-lg" /> 
        </button>
        <div className="flex w-30 gap-5">
          <p className="text-3xl w-7 font-bold">{(index + 1)}</p>
          <p className="text-3xl w-16 font-light">{weekDays[index % 7]}</p>
        </div>
        <button onClick={() => changeDay(1)}>
          <FontAwesomeIcon icon={faArrowRight} className="text-lg" />
        </button>
      </div>
      {/* Grid layout for time labels and classes */}
      <div className="grid" style={gridStyle}>
        {/* Time labels */}
        {[
          "8 AM",
          "9 AM",
          "10 AM",
          "11 AM",
          "12 PM",
          "1 PM",
          "2 PM",
          "3 PM",
          "4 PM",
          "5 PM",
          "6 PM",
          "7 PM",
          "8 PM",
          "9 PM",
        ].map((time, timeIndex) => (
          <div
            key={timeIndex}
            className="text-gray-700 text-left"
            style={{ gridRowStart: timeIndex + 1, gridColumn: 1 }}
          >
            {time}
          </div>
        ))}
        {/* Classes rendered in dynamic columns */}
        {classes[index % classes.length].map((aula, aulaIndex) => {
          const startRow = timeToGridRow(aula.startTime);
          const endRow = timeToGridRow(aula.endTime);
          const rowSpan = endRow - startRow + 1; // Ensure inclusive span
          return (
            <Aula
              key={aulaIndex}
              startr={startRow}
              rowS={rowSpan}
              bgColor={aula.color}
              aula={aula}
              link={link}
              schedule={addBookingCallback}
            />
          );
        })}
      </div>
    </div>
  );
}
