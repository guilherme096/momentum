import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PageLayout({children, pageName}) {
    return (
        <div className="w-screen">
            <Header pageName={pageName} />
            <div className="p-3 rounded-lg h-screen w-full overflow-x-visible max-w-full">
                <main>{children}</main>
            </div>
            <Navbar />
        </div>
    )
}
