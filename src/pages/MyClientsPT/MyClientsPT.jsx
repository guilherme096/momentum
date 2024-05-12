import PageLayoutPT from '../../layouts/PageLayoutPT';
import CardLayout from '../../layouts/CardLayout';
import { Link } from 'react-router-dom';
import { Fragment, useState, useEffect, useRef } from 'react';
import ClientModal from '../../components/ClientModal';


export default function MyClientsPT() {
    const people = [
        { id: 1, name: 'Sara Faria', age: "25 years", weight: '65kg', height: '165cm', joined: '6 months ago', day:"20", mon:"MAI", year:"2024", time: "18h00", lm: '84%', fm:'16%', cd: " 13th May",img: 'https://img.freepik.com/free-photo/happy-young-woman-standing-isolated-white-wall_171337-18037.jpg'},
        { id: 2, name: 'Diogo Costa', age: "28 years", weight: '70kg', height: '175cm', joined: '1 year ago', day:"22", mon:"MAI", year:"2024", time: "10h00", lm: '82%', fm:'18%', cd: " 13th May",img: 'https://img.freepik.com/free-photo/close-up-portrait-smiling-young-bearded-man_171337-4819.jpg' }, 
        { id: 3, name: 'Martim Silva', age: "29 years", weight: '94kg', height: '185cm', joined: '2 years ago', day:"20", mon:"MAI", year:"2024", time: "18h30", lm: '80%', fm:'20%', cd: " 13th May",img: 'https://img.freepik.com/free-photo/handsome-young-guy-casual-clothing_144627-3016.jpg?size=626&ext=jpg&ga=GA1.1.46750740.1715365059&semt=ais_user' },
        { id: 4, name: 'Clara Matos', age: "30 years", weight: '68kg', height: '170cm', joined: '3 months ago', day:"24", mon:"MAI", year:"2024", time: "11h30", lm: '89%', fm:'11%', cd: " 13th May",img: 'https://img.freepik.com/free-psd/studio-portrait-young-teenage-girl_23-2150162484.jpg' },
        { id: 5, name: 'Joao Mário', age: "30 years", weight: '80kg', height: '180cm', joined: ' 10 months ago', day:"29", mon:"MAI", year:"2024", time: "18h30", lm: '83%', fm:'17%', cd: " 13th May",img: 'https://img.freepik.com/free-psd/studio-portrait-young-teenage-boy_23-2150162247.jpg?size=626&ext=jpg&ga=GA1.1.46750740.1715365059&semt=ais_user' },
    ];

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedClient, setSelectedClient] = useState(null);

    const handleCardClick = (client) => {
        setSelectedClient(client); 
        setModalOpen(true);         
        setTimeout(() => {
            document.getElementById('my_modal_2').showModal();
        }, 0);
    };
    
    return (
        <PageLayoutPT pageName="My Clients">
            <div className='flex justify-between items-center'>
                <h1 className="text-xl font-bold"> Scheduled Classes</h1>
                <Link to="/training-schedule-pt">
                    <button className="btn btn-sm text-white btn-primary">Add Class</button>
                </Link>
            </div>
            <p>[calendário]</p>
            <h1 className="text-xl font-bold mt-8">Client Details</h1>
            <div className="flex flex-row overflow-auto space-x-0">
                {people.map(person => (
                    <div key={person.id} className="shrink-0 w-22" onClick={() => handleCardClick(person)}>
                        <CardLayout 
                            image={person.img} 
                            hasImage={!!person.img}
                        >   
                        <div className="flex flex-col justify-center items-center h-full"> 
                            <div className="text-center text-sm">{person.name}</div>
                        </div>
                        </CardLayout>
                    </div>
                ))}
            </div>
            {modalOpen && selectedClient && (
                <ClientModal client={selectedClient} onClose={() => setModalOpen(false)} />
            )}
            
        </PageLayoutPT>
    );
}
