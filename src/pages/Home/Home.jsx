import QRCard from '../../components/QRCard';
import PageLayout from '../../layouts/PageLayout';
import CrowdGraph from '../../components/CrowdGraph'
import { Link } from "react-router-dom";
import HomeCard from '../../components/HomeCard';


export default function Home() {
    return (
        <PageLayout pageName="Home" style="">
            <div className='px-2'>
                <div className='w-full bg-base-100 shadow-md h-fit py-4 rounded-lg'>
                    <QRCard />
                </div>
            </div>
            <div className="bg-transparent px-2 mt-6 w-full h-36 flex justify-around items-center">
                <HomeCard title="Class Schedule" image="https://images.unsplash.com/photo-1549995546-87cb41aa98a4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="/class-schedule"/>
                <HomeCard title="Personal Trainer" image="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="/class-schedule"/>
            </div>
            <div className='bg-transparent px-2 mt-2 mb-9 w-full h-36 flex'>
                <HomeCard title="Training Zone" isSquare={false} image="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" link="/class-schedule"/>
            </div >
            <CrowdGraph></CrowdGraph>

                <Link to="/class-schedule">
                    <button className='btn bg-primary'>O rui é lindo :3</button>
                </Link>
            

        </PageLayout>
    );
}
