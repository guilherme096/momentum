import Navbar from "../components/Navbar";

export default function PageLayout({children}) {
    return (
        <div className="p-4 rounded-lg h-screen w-full overflow-hidden max-w-full pb-16">
            <main>{children}</main>
            <Navbar></Navbar> 
        </div>
    )
}