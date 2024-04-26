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
        <div className="bg-transparent h-fit w-fit mx-auto rounded-md">
            <div className="card w-32 h-32 bg-transparent rounded-lg mx-auto flex flex-col justify-center align-middle">
               <div ref={qrContainer}  className="bg-qr-code min-w-32 bg-no-repeat bg-center bg-contain absolute h-full w-full mx-auto blur-md bg-base-100"></div>
                <button ref={qrButton} className="text-primary text-2xl text-center h-full w-full font-bold z-10" onClick={handleStart}>Show QR Code</button> 
            </div>
        </div>
        <div className='mx-auto w-fit mt-4 hidden' ref={timerContainer}>
            <Countdown isActive={timerActive} completedCallback={handleStop}/>
        </div>
        </>
    );
}
