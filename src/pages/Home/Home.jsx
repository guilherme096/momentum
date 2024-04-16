import Calendar from '../../components/Calendar';
import Navbar from '../../components/Navbar';
import CardLayout from '../../layouts/CardLayout';

export default function Home() {
    return (
        <div className="h-screen w-full">
            <Navbar></Navbar>
            <div className="flex flex-row justify-between h-fit w-full py-8">
                <CardLayout>
                    test
                </CardLayout>
                <CardLayout>
                    test
                </CardLayout>
                <CardLayout>
                    test
                </CardLayout>
            </div>
            <Calendar/>
        </div>
    );
}
