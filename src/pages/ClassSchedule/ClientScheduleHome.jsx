import PageLayout from '../../layouts/PageLayout';
import CardLayout from '../../layouts/CardLayout';
import { Link } from 'react-router-dom';

export default function ClientScheduleHome(){

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
        
        </PageLayout>
    );
}