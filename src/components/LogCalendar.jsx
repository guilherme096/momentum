import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  {exercise_logs}  from '../info';
import { useState } from 'react';

export default function LogCalendar(){
 const [currentLog, setCurrentLog] = useState(null);

 const onLogClick = (day) => {
    const log = exercise_logs.find((log) => {
      return new Date(log.date).getDate() === day.getDate();
    });
    setCurrentLog(log);
  }

 const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      if (isSpecialDay(date)) {
        return 'text-red-500';
      }
    }
  };

  const isSpecialDay = (date) => {
      return exercise_logs.some((log) => {
        return new Date(log.date).getDate() === date.getDate();
      });
  };

  return (
    <>
        <Calendar
          tileClassName={tileClassName}
            onClickDay={onLogClick}
        />
        {currentLog && (
          <div>
            <h1>{currentLog.date}</h1>
            <h2>{currentLog.exercises_done[0].id}</h2>
          </div>
        )}
    </>
  );
}
