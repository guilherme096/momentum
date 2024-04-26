import PageLayout from '../../layouts/PageLayout';
import CardLayout from '../../layouts/CardLayout';

export default function TrainingSupport() {
    return (
        <PageLayout pageName="Training Support">
            <h1 className="text-2xl font-bold mt-2">Timer</h1>
            <div className='flex flex-col items-center justify-between'>
                <h1 className="text-7xl font-bold"> 00:00</h1>
                <div className="flex flex-row justify-between mt-2 mr-12 ml-12">
                    <button className="btn btn-md btn-outline text-primary rounded mr-5">Pause</button>
                    <button className="btn btn-md btn-outline text-primary rounded">Reset</button>
                    <button className="btn btn-md btn-outline text-primary rounded ml-5">Start</button>
                </div>
            </div>

            <h1 className="text-2xl font-bold mt-8">Exercises</h1>
            <div>
                <button className='btn btn-outline font-boldrounded mt-2 w-full'>Scan Machine QR</button>
            </div>

            <h1 className="text-2xl font-bold mt-8">In this session</h1>
            <div className='flex flex-row flex-wrap justify-around items-center mt-5'>
                <CardLayout>
                    +
                </CardLayout>

                <CardLayout>
                    Squat
                </CardLayout>

                <CardLayout>
                    Leg Press
                </CardLayout>

                <CardLayout>
                    Chest Press
                </CardLayout>
            </div>
        </PageLayout>
    );
}
