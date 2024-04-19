import {useState, useEffect, useRef} from 'react';
import Countdown from './Countdown';

export default function QRCard() {
    const [timerActive, setTimerActive] = useState(false);

    const qrContainer = useRef(null);
    const qrButton = useRef(null);

    const timerContainer = useRef(null);

    const handleStart = () => {
        setTimerActive(true);
    };

    const handleStop = () => {
        setTimerActive(false);
    };


    useEffect(() => {
        if(timerActive){
            qrContainer.current.classList.remove("blur-sm");
            qrButton.current.classList.add("hidden");
            timerContainer.current.classList.remove('hidden')
        } else {
            qrContainer.current.classList.add("blur-sm");
            qrButton.current.classList.remove("hidden");
            timerContainer.current.classList.add('hidden')
        }
    }, [timerActive]);

    return (
        <>
        <div className="bg-base-100 drop-shadow-lg h-fit w-fit mx-auto rounded-md">
            <div className="card w-32 h-32 overflow-clip  rounded-lg mx-auto bg-base-100 flex flex-col justify-center align-middle">
               <div ref={qrContainer}  className="bg-qr-code bg-center bg-contain absolute h-full w-full mx-auto blur-sm bg-base-100"></div>
               <button ref={qrButton} className="btn btn-ghost text-white text-lg text-center h-fit font-black z-10 bg-transparent drop-shadow-lg" onClick={handleStart}>Show <br/>QR Code</button> 
            </div>
        </div>
        <div className='mx-auto w-fit mt-4 hidden' ref={timerContainer}>
            <Countdown isActive={timerActive} completedCallback={handleStop}/>
        </div>
        </>
    );
}
