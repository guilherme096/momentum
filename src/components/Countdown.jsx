import { useEffect, useState } from "react";

const TIME = 5;

export default function Countdown({isActive, completedCallback}){
    const [counter, setCounter] = useState(TIME);

    useEffect(() => {
        if(isActive){
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if(timer == 0){
                completedCallback();
                setCounter(TIME);
            }
            return () => clearInterval(timer);
        }
    }, [isActive, counter]);


    return (
        <>
        <span className="countdown text-xl">
          <span style={{"--value":counter}}></span>
        </span>
        </>
    );
}
