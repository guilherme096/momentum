import {useState, useEffect, useRef} from 'react';
export default function QRCard() {
    const[showQR, setShowQR] = useState(false);
    const qrContainer = useRef(null);
    const qrButton = useRef(null);

    useEffect(() => {
        if(showQR){
            qrContainer.current.classList.remove("blur-sm");
            qrButton.current.classList.add("hidden");
        } else {
            qrContainer.current.classList.add("blur-sm");
        }
    }, [showQR]);

    const showQRCode = () => {
        setShowQR(true);
    }

    return (
        <div className="bg-base-100 drop-shadow-lg h-fit w-fit mx-auto rounded-md">
            <div className="card w-32 h-32 overflow-clip  rounded-lg mx-auto bg-base-100 flex flex-col justify-center align-middle">
               <div ref={qrContainer}  className="bg-qr-code bg-center bg-contain absolute h-full w-full mx-auto blur-sm bg-base-100"></div>
               <button ref={qrButton} className="btn btn-ghost text-white text-lg text-center h-fit font-black z-10 bg-transparent drop-shadow-lg" onClick={showQRCode}>Show <br/>QR Code</button> 
            </div>
        </div>
    );
}
