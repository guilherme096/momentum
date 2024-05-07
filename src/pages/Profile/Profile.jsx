import PageLayout from '../../layouts/PageLayout';
import CardLayout from '../../layouts/CardLayout';

export default function Profile() {
    return (
        <PageLayout pageName="Profile">
            <div className='flex justify-between items-center ml-9 mr-9 mb-9'>
                <div className='flex justify-between items-center'>

                    <div className="avatar">
                        <div className="w-24 rounded-full">
                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-2xl font-bold mt-2">Nuno Santos</h1>
                    <h3 className='stat-title text-xl mb-1'>Premium user</h3>
                </div>
            </div>

            <div>
            <div className='flex justify-between items-center'>

                <h1 className="text-2xl font-bold">Frequency Goals </h1>
                <button className="btn btn-xs btn-outline btn-primary">Edit</button>


            </div>

                <div className='flex justify-between items-center mr-6 ml-6 mt-5'>    
                    <div className="radial-progress" style={{"--value":70, "--thickness": "6px", "--size": "5rem" }} role="progressbar">4/12</div>

                    <div className="flex flex-col items-start justify-between">
                        <h1 className='text-xl'>Goal: 12 p/month</h1>
                        <h1 className='text-xl mb-1'>Current: 4 this month</h1>
                        <h1 className='text-sm mb-1 stat-title'>Progress: 44%</h1>
                    </div>

                </div>
            </div>
            <h1 className="text-2xl font-bold mt-8"> Bio Metrics</h1>
                <div className='flex flex-row flex-wrap justify-around items-center mt-5'>  
                <CardLayout>
        +
                </CardLayout>

                <CardLayout>
                    Peso
                </CardLayout>

                <CardLayout>
                    IMC
                </CardLayout>

                <CardLayout>
                    Gordura
                </CardLayout>
  
                </div>


        </PageLayout>
    );
}
