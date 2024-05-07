import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export default function HeatCalendar(){
    return (
        <div className="max-w-full flex flex-col align-middle items-center h-fit my-28">
            <Calendar/>
        </div>
    )
}
