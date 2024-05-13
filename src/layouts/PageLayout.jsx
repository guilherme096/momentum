import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PageLayout({children, pageName, style}) {
    const styling = `w-screen ${style}`;
    return (
        <div className={styling}>
            <Header pageName={pageName} />
            <div className="p-4 rounded-lg h-screen w-full overflow-x-visible max-w-full mb-12">
                <main>{children}</main>
            </div>
            <Navbar />
        </div>
    )
}
