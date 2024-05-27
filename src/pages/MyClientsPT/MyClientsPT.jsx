import PageLayoutPT from "../../layouts/PageLayoutPT";
import CardLayout from "../../layouts/CardLayout";
import { Link } from "react-router-dom";
import { Fragment, useState, useEffect, useRef } from "react";
import ClientModal from "../../components/ClientModal";
import PTClientsCalendar from "../../components/PTClientsCalendar";

export default function MyClientsPT() {
  const people = [
    {
      id: 1,
      name: "Sara Matos",
      age: "25 years",
      weight: "65kg",
      height: "165cm",
      joined: "6 months ago",
      day: "20",
      mon: "MAI",
      year: "2024",
      time: "18h00",
      lm: "84%",
      fm: "16%",
      cd: " 13th May",
      img: "https://img.freepik.com/free-photo/happy-young-woman-standing-isolated-white-wall_171337-18037.jpg",
    },
    {
      id: 2,
      name: "Diogo Costa",
      age: "28 years",
      weight: "70kg",
      height: "175cm",
      joined: "1 year ago",
      day: "22",
      mon: "MAI",
      year: "2024",
      time: "10h00",
      lm: "82%",
      fm: "18%",
      cd: " 13th May",
      img: "https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg",
    },
    {
      id: 3,
      name: "Martim Silva",
      age: "29 years",
      weight: "94kg",
      height: "185cm",
      joined: "2 years ago",
      day: "20",
      mon: "MAI",
      year: "2024",
      time: "18h30",
      lm: "80%",
      fm: "20%",
      cd: " 13th May",
      img: "https://img.freepik.com/free-photo/handsome-young-guy-casual-clothing_144627-3016.jpg?size=626&ext=jpg&ga=GA1.1.46750740.1715365059&semt=ais_user",
    },
    {
      id: 4,
      name: "Clara Matos",
      age: "30 years",
      weight: "68kg",
      height: "170cm",
      joined: "3 months ago",
      day: "24",
      mon: "MAI",
      year: "2024",
      time: "11h30",
      lm: "89%",
      fm: "11%",
      cd: " 13th May",
      img: "https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);
  const [query, setQuery] = useState("");

  const handleCardClick = (client) => {
    setSelectedClient(client);
    setModalOpen(true);
    setTimeout(() => {
      document.getElementById("my_modal_2").showModal();
    }, 0);
  };

  return (
    <PageLayoutPT pageName="My Clients">
      <h1 className="text-2xl font-bold mt-2">Upcoming Class</h1>
      <div className="rounded-lg shadow-lg p-4 bg-base-200 mb-6 mt-2">
        {
          <Fragment>
            <h3 className="text-xl font-bold mb-1">Sara Matos</h3>
            <div className="w-full flex flex-row">
              <div>
                <p className="text-sm font-bold inline">Time:</p>
                <p className="text-md inline ml-1">18h00</p>
              </div>
              <div className="ml-2">
                <p className="text-md font-bold inline">Duration:</p>
                <p className="text-md inline ml-1">1h</p>
              </div>
            </div>
          </Fragment>
        }
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold"> Scheduled Classes</h1>
        <Link to="/training-schedule-pt">
          <button className="btn btn-md text-white btn-primary">
            Add Class
          </button>
        </Link>
      </div>
      <div className="my-6">
        <PTClientsCalendar />
      </div>
      <h1 className="text-2xl font-bold mt-8">Client Details</h1>
      <div className="flex justify-center items-center mt-4">
        <div className="join">
          <div>
            <div>
              <input
                className="input input-bordered join-item "
                placeholder="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="indicator">
            <button className="btn join-item">Search</button>
          </div>
        </div>
      </div>
      <div className="flex flex-row overflow-clip flex-wrap max-w-full w-full justify-evenly py-4">
        {people.map((person) => {
          if (
            query &&
            !person.name.toLowerCase().includes(query.toLowerCase())
          ) {
            return null;
          }
          return (
            <div
              key={person.id}
              className="shrink-0"
              onClick={() => handleCardClick(person)}
            >
              <CardLayout image={person.img} hasImage={!!person.img}>
                <div className="flex flex-col justify-center items-center h-full">
                  <div className="text-center text-sm">{person.name}</div>
                </div>
              </CardLayout>
            </div>
          );
        })}
      </div>
      {modalOpen && selectedClient && (
        <ClientModal
          client={selectedClient}
          onClose={() => setModalOpen(false)}
        />
      )}
    </PageLayoutPT>
  );
}
