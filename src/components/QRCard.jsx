import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from './Countdown';

export default function QRCard() {
    const [timerActive, setTimerActive] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const qrContainer = useRef(null);
    const qrButton = useRef(null);
    const timerContainer = useRef(null);

    const handleStart = () => {
        setTimerActive(true);
        qrButton.current.classList.add('hidden');
    };

    const handleStop = () => {
        setTimerActive(false);
        setIsModalOpen(false); // Close modal when timer stops
        qrButton.current.classList.remove('hidden');
    };

    const toggleModal = () => {
        if (!timerActive) return; // Prevents expanding QR code when timer is not active
        setIsModalOpen(!isModalOpen);
    };

    const backdropStyles = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 50
    };

    const qrCodeVariants = {
        hidden: { scale: 0.5, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <>
            <div className="bg-transparent h-fit w-fit mx-auto rounded-md">
                <div className={`card w-full h-32 bg-transparent rounded-lg mx-auto flex  ${timerActive ? "flex-col" : "flex-row"} justify-between align-middle items-center`}>
                    <motion.div layoutId='1'  ref={qrContainer} className={`bg-qr-code min-w-32 bg-no-repeat bg-center bg-contain h-full w-full ${timerActive ? '' : 'blur-sm'} bg-base-100`} onClick={toggleModal}></motion.div>
                    <button ref={qrButton} className="btn btn-outline ml-8 shadow-md" onClick={handleStart}>Show QR Code</button> 
                    {timerActive && <div className="mt-4" ref={timerContainer}>
                        <Countdown isActive={timerActive} completedCallback={handleStop}/>
                    </div>}
                </div>
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div style={backdropStyles} initial="hidden" animate="visible" exit="hidden" onClick={toggleModal}>
                        <motion.div className='p-4 bg-base-100 rounded-lg' initial="hidden" animate="visible" exit="hidden" onClick={(e) => e.stopPropagation()} // Prevents click from closing modal
                        variants={qrCodeVariants}>
                        <motion.div layoutId='1' className="bg-qr-code min-w-64 min-h-64 max-w-64 max-h-64 bg-no-repeat bg-center bg-contain relative flex flex-col justify-end">
                        </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

