import PageLayout from '../../layouts/PageLayout';
import { Link } from 'react-router-dom';
import DailyAgenda from '../../components/DailyAgenda';
import AulasCard from '../../components/AulasCard';

export default function ClientScheduleHome(){


    const classes = [
        {
            name: "CossFit",
            startTime: "10 AM",
            endTime: "11 AM",
            color: "#fbf8cc",
        },

        {
            name: "Cycling",
            startTime: "1 PM",
            endTime: "3 PM",
            color: "#fde4cf"
        },
        {
            name: "Yoga",
            startTime: "8 AM",
            endTime: "9 AM",
            color: "#ffcfd2"
        },
        {
            name: "Pilates",
            startTime: "5 PM",
            endTime: "6 PM",
            color: "#d1ffe6"
        },
        {
            name: "Boxing",
            startTime: "7 PM",
            endTime: "8 PM",
            color: "#a3c4f3"
        }

    ];

    const day = {
        month: "9",
        week: "Mon"
    }


    return(
        <PageLayout pageName="Class Schedule">
            <h1 className="text-xl font-bold mt-2">Your bookings</h1>
            <div className="flex flex-row overflow-auto space-x-0">
                {classes.sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)).map((cls, index) => (
                    <div key={index} className="shrink-0 w-22">
                        <AulasCard 
                            name={cls.name}
                            time={cls.startTime + " - " + cls.endTime}
                        />
                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-xl font-bold mt-8"> All bookings</h1>

            </div>

            <Link to="/class-schedule">
                <button className='btn bg-primary'>class schedule</button>
            </Link>

            
            <DailyAgenda link={"/class-schedule"} classes={classes} day={day} />
        
        </PageLayout>
    );
}

function timeToMinutes(time) {
    const [hour, modifier] = time.split(' ');
    let [hours, minutes] = hour.split(':');
    hours = parseInt(hours, 10);
    minutes = minutes ? parseInt(minutes, 10) : 0;

    // Convert "PM" hours to 24-hour time
    if (modifier === 'PM' && hours !== 12) {
        hours += 12;
    } else if (modifier === 'AM' && hours === 12) {
        hours = 0; // Midnight edge case
    }

    return hours * 60 + minutes;
}
