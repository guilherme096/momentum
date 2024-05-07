import { Link } from "react-router-dom";

export default function HomeCard({title, image, link="", isSquare=false}) {
    const styling = isSquare ? "aspect-square" : "w-full";
    return (
        <>
            <Link className={`bg-base-100 drop-shadow-lg h-full mx-1 ${styling} rounded-md`} to={link}>
                <div className="card w-full h-full overflow-clip  rounded-lg mx-auto flex flex-col justify-center align-middle">
                   <img className="bg-qr-code bg-center bg-contain object-cover absolute h-full w-full mx-auto bg-base-100" src={image}/>
                   <button className="absolute bottom-3 w-full btn btn-ghost text-white text-lg text-center h-fit font-black z-20 bg-transparent drop-shadow-lg">{title}</button> 
                   <div className='bg-gradient-to-b from-transparent to-black absolute h-full w-full mx-auto z-10'></div>
                </div>
            </Link>
        </>
    );
}
