import Navbar from '../../components/Navbar';
import CardLayout from '../../layouts/CardLayout';
import PageLayout from '../../layouts/PageLayout';

export default function Home() {
    return (
        <PageLayout>
            <div className="flex flex-row justify-between h-fit w-full py-5 px-0 overflow-scroll whitespace-nowrap ">
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
        </PageLayout>
    );
}
