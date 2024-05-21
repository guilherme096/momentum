import React from "react";
import { Link } from "react-router-dom";
import Aula from "./Aula";
import { useState } from "react";

export default function DailyAgenda({
  classes,
  day,
  link,
  addBookingCallback,
}) {
  const [index, setDay] = useState(0);

  const changeDay = (amount) => {
    setDay(index + amount);
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
        <button onClick={() => changeDay(-1)}>&lt;</button>
        <p className="text-3xl font-bold">{day + 7}</p>
        <p className="text-3xl font-light">{day.week}</p>
        <button onClick={() => changeDay(1)}>&lt;</button>
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
        ].map((time, index) => (
          <div
            key={index}
            className="text-gray-700 text-left"
            style={{ gridRowStart: index + 1, gridColumn: 1 }}
          >
            {time}
          </div>
        ))}
        {/* Classes rendered in dynamic columns */}
        {classes[index].map((aula, index) => {
          const startRow = timeToGridRow(aula.startTime);
          const endRow = timeToGridRow(aula.endTime);
          const rowSpan = endRow - startRow + 1; // Ensure inclusive span
          return (
            <Aula
              key={index}
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
