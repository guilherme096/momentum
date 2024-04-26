import Navbar from '../../components/Navbar';
import QRCard from '../../components/QRCard';
import CardLayout from '../../layouts/CardLayout';
import PageLayout from '../../layouts/PageLayout';
import CrowdGraph from '../../components/CrowdGraph'
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <PageLayout pageName="Home">
            <QRCard />
            <CrowdGraph></CrowdGraph>

                <Link to="/class-schedule">
                    <button className='btn bg-primary'>O rui é lindo :3</button>
                </Link>
            

        </PageLayout>
    );
}
