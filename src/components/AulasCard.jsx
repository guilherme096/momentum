import CardLayout from "../layouts/CardLayout"

export default function ExerciseCard({name, time}) {
    return (
        <CardLayout>
            <h3 className="text-xl font-bold mb-1">{name}</h3> 
            <div className='w-full flex flex-row justify-between'>
                <div><p className=" text-sm inline ml-1">{time}</p></div>
            </div>
        </CardLayout>
    );
}