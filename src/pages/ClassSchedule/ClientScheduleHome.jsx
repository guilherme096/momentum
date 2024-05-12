import PageLayout from '../../layouts/PageLayout';
import CardLayout from '../../layouts/CardLayout';
import { Link } from 'react-router-dom';
import DailyAgenda from '../../components/DailyAgenda';

export default function ClientScheduleHome(){

    const classes = [
        {
            name: "High Intensity Training",
            startTime: "10 AM",
            endTime: "11 AM",
            color: "#ffd1ff"
        },

        {
            name: "Cycling",
            startTime: "1 PM",
            endTime: "3 PM",
            color: "#ffd1ff"
        },
        {
            name: "Yoga",
            startTime: "8 AM",
            endTime: "9 AM",
            color: "#d1ffe6"
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
                {Array.from({ length: 5}, (_, i) => (
                    <div key={i} className="shrink-0 w-22">
                        <CardLayout />
                    </div>
                ))}
            </div>
            <div>
                <h1 className="text-xl font-bold mt-8"> All bookings</h1>

            </div>

            <Link to="/class-schedule">
                <button className='btn bg-primary'>class schedule</button>
            </Link>

            
            <DailyAgenda classes={classes} day={day} />
        
        </PageLayout>
    );
}