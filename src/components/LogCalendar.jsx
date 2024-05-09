import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import  {exercise_logs}  from '../info';

export default function LogCalendar(){
 const tileClassName = ({ date, view }) => {
    // Assuming `view` is "month"
    if (view === 'month') {
      // Check if it's a special day
      if (isSpecialDay(date)) {
        return 'text-red-500';
      }
    }
  };

  // Example condition functions
  const isSpecialDay = (date) => {
    // Example: Mark every 15th day of the month
      return exercise_logs.some((log) => {
        return new Date(log.date).getDate() === date.getDate();
      });
  };

  return (
    <Calendar
      tileClassName={tileClassName}
    />
  );
}
