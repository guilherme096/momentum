import PageLayout from '../../layouts/PageLayout';

export default function PersonalTrainer() {
    return (
        <PageLayout pageName="Personal Trainer">
            <div className='flex justify-between items-center ml-9 mr-9 mb-9'>
                <div className='flex justify-between items-center'>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-2xl font-bold mt-2 ">Kevin Monteiro</h1>
                    <h3 className='stat-title text-xl mb-1'>Personal Trainer</h3>
                </div>
            </div>

            <h1 className="text-2xl font-bold">Next Class</h1>
            
            <div className='flex items-center flex-col mt-4 justify-between'>
                <div className="flex flex-row items-center">
                    <div className="text-5xl font-bold">20</div>
                    <div className='flex flex-col ml-2 items-center '>
                        <div className="text-lg leading-tight">APR</div>
                        <div className="text-lg leading-tight">2024</div>
                    </div>

                <div className="border border-gray-500 py-5 mr-5 ml-5"></div>

                <div className="text-4xl font-bold">18H00</div>

            </div>
                <div className="text-lg mt-3">plan: leg day</div>

            </div>
            <HeatCalendar/>

        </PageLayout>
    );
}
