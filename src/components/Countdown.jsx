import { useEffect, useState } from "react";

export default function Countdown({isActive, completedCallback}){
    const [counter, setCounter] = useState(30);

    useEffect(() => {
        if(isActive){
            const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if(timer == 0){
                completedCallback();
            }
            return () => clearInterval(timer);
        }
    }, [isActive, counter]);


    return (
        <>
        <span className="countdown">
          <span style={{"--value":counter}}></span>
        </span>
        </>
    );
}
