import Navbar from '../../components/Navbar';
import QRCard from '../../components/QRCard';
import CardLayout from '../../layouts/CardLayout';
import PageLayout from '../../layouts/PageLayout';
import CrowdGraph from '../../components/CrowdGraph'

export default function Home() {
    return (
        <PageLayout>
            <QRCard />
            <CrowdGraph></CrowdGraph>
        </PageLayout>
    );
}
