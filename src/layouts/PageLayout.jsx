import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PageLayout({children}) {
    return (
        <div className="w-screen">
            <Header></Header>
            <div className="p-3 rounded-lg h-screen w-full overflow-x-visible max-w-full">
                <main>{children}</main>
            </div>
            <Navbar></Navbar> 
        </div>
    )
}