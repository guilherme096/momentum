import QRCard from "../../components/QRCard";
import PageLayoutPT from "../../layouts/PageLayoutPT";
import CrowdGraph from "../../components/CrowdGraph";
import HomeCard from "../../components/HomeCard";
import PtCalendar from "../../components/PtCalendar";

export default function HomePT() {
  return (
    <PageLayoutPT pageName="Home" style="">
      <div className="px-2">
        <div className="w-full bg-base-100 shadow-md h-fit py-4 rounded-lg">
          <QRCard />
        </div>
      </div>
      <div className="bg-transparent px-2 mt-2 mb-5 w-full h-36 flex">
        <HomeCard
          title="My Clients"
          isSquare={false}
          image="https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          link="/my-clients"
        />
      </div>
      <h1 className="text-xl pl-3 font-bold -mb-1">General Calendar</h1>
      <div className="p-3">
        <PtCalendar />
      </div>
      <CrowdGraph></CrowdGraph>
    </PageLayoutPT>
  );
}
