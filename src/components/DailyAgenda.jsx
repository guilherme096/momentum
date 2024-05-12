import React from 'react';

export default function DailyAgenda({classes}){
    const timeToGridRow = (time) => {
        const [hour, modifier] = time.split(' ');
        let hourNumber = parseInt(hour, 10);
        if (modifier === 'PM' && hourNumber !== 12) {
        hourNumber += 12;
        }
        return hourNumber - 8; // assuming the grid starts at 9 AM which is row 1
    };
    return(
        <div className="grid gap-2 grid-cols-[auto_1fr] m-8">
            <div className="grid grid-rows-[repeat(13,3.1rem)]">
                <div></div>
                {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM"].map((time, index) => (
                <div key={index} className="text-gray-700 text-left">{time}</div>
                ))}
            </div>
            <div className="grid gap-1">
                <div className="bg-[#fff1f8] rounded-lg">
                    {classes.map((aula, index) => {
                        const startRow = timeToGridRow(aula.startTime);
                        const endRow = timeToGridRow(aula.endTime);
                        const rowSpan = endRow - startRow;
                        return (
                        <div key={index} className={`row-start-${startRow} row-span-${rowSpan} bg-${aula.color} border border-[#f2d3d8] rounded-lg p-2 mx-2`}>
                            <p className="font-semibold mb-1">{aula.name}</p>
                            <p className="text-sm text-gray-600">{aula.startTime} - {aula.endTime}</p>
                        </div>
                        );
                    })}
                </div>
                {/*
                    <div className="flex gap-4 items-center h-12 px-4">
                        <p className="text-3xl font-bold">9</p>
                        <p className="text-3xl font-light">Mon</p>
                    </div>
                    <div className="grid grid-rows-[repeat(10,3.8rem)]">
                        <div className="row-start-2 row-span-1 bg-[#d1ffe6] border border-[#f2d3d8] rounded-lg p-2 mx-2">
                            <p className="font-semibold mb-1">Yoga</p>
                            <p className="text-sm text-gray-600">10 AM - 11 AM</p>
                        </div>
                        <div className="row-start-6 row-span-2 bg-[#ffd1ff] border border-[#f2d3d8] rounded-lg p-2 mx-2">
                            <p className="font-semibold mb-1">High Intensity Training</p>
                            <p className="text-sm text-gray-600">3 PM - 5 PM</p>
                        </div>
                    </div>
                */}
                {// </div>
                }

            </div>
        </div>
    );
};

