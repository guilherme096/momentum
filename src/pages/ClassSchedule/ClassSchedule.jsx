import PageLayout from '../../layouts/PageLayout';
import ConfirmationModal from '../../components/ConfirmationModal';
import { useRef } from 'react';

export default function ClassSchedule({class_obj}) {
    const n = class_obj.ocupation_math;
    const ConfirmationModalRef = useRef(null);

    const handleModal = () => {
        ConfirmationModalRef.current.showModal();
    }
    
    return (
        <PageLayout pageName="Classes">
            <div className='flex flex-col'>
                <div className="rounded-md overflow-clip">
                    <img src={class_obj.image} alt="classImage" style={{ width: '100%' }}/>
                </div>
                <div className="flex justify-between items-end ">
                    <h1 className="text-3xl font-bold mt-2">{class_obj.name}</h1>
                    <h3 className='stat-title text-xl mb-1'>Teacher: {class_obj.teacher} </h3>
                </div>
                <div>
                    <p className="text-xl font-light mt-2 text-justify">{class_obj.description}</p>
                </div>
                <div className="flex fixed w-full justify-between items-center bottom-14 left-0 px-5 bg-white">
                    <div className="stats lg:stats-horizontal shadow-sm">

                        <div className="stat text-center">
                            <div className="stat-title mb-4 text-sm">Timestamp</div>
                            <div className="stat-value text-xl items-center text-center">{class_obj.date}</div>
                            <div className="stat-value text-xl items-center text-center mb-2">{class_obj.time}</div>
                        </div>
                        
                        <div className="stat text-center">
                            <div className="stat-title items-center text-sm">Lotation</div>
                            <div className="stat-value radial-progress text-sm ml-1 mt-2" style={{ "--value": 100 * n, "--size": "4rem", "--thickness": "4px" }} role="progressbar">{class_obj.ocupation}</div>
                        </div>      
                    </div>

                    <button className="btn-lg bg-primary text-white font-bold rounded" onClick={()=>document.getElementById('my_modal_2').showModal()}>Add</button>
                    <ConfirmationModal></ConfirmationModal>
                </div>
            </div>
        </PageLayout>
    );
}
