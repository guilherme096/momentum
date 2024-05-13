import React from 'react';
import { Link } from 'react-router-dom';
import Aula from './Aula'

export default function DailyAgenda({ classes, day }) {
    // Helper to calculate grid row based on time
    const timeToGridRow = (time) => {
        const [hour, modifier] = time.split(' ');
        let hourNumber = parseInt(hour, 10);
        if (modifier === 'PM' && hourNumber !== 12) {
            hourNumber += 12;
        }
        return hourNumber - 7; // Grid starts at 8 AM, adjust accordingly
    };

    // Styling for the grid container
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr', // "auto" for the hour column and "1fr" for the class column
        gap: '2px',
        gridAutoRows: '3rem' // Match row height for hours and classes
    };

    return (
        <div className="m-8 bg-[#fff1f8] p-2">
            {/* Day and month display */}
            <div className='flex justify-center items-center h-12 px-4 space-x-4'>
                <p className="text-3xl font-bold">{day.month}</p>
                <p className="text-3xl font-light">{day.week}</p>
            </div>
            {/* Grid layout for time labels and classes */}
            <div className="grid" style={gridStyle}>
                {/* Time labels */}
                {["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"].map((time, index) => (
                    <div key={index} className="text-gray-700 text-left" style={{ gridRowStart: index + 1, gridColumn: 1 }}>{time}</div>
                ))}
                {/* Classes rendered in dynamic columns */}
                {classes.map((aula, index) => {
                    const startRow = timeToGridRow(aula.startTime);
                    const endRow = timeToGridRow(aula.endTime);
                    const rowSpan = endRow - startRow + 1; // Ensure inclusive span
                    return (
                       <div key={index} style={{ gridColumnStart: 2, gridRowStart: startRow, gridRowEnd: startRow + rowSpan, backgroundColor: aula.color }}
                            className={`border border-[#f2d3d8] rounded-lg p-2 m-2 flex items-center justify-start overflow-hidden`}>
                            <p className="font-semibold flex-auto min-w-0">{aula.name}</p>
                            <p className="shrink-0 pl-2 text-sm text-gray-600 whitespace-nowrap">{aula.startTime} - {aula.endTime}</p>
                        </div> 
                    );
                })}
            </div>
        </div>
    );
}

