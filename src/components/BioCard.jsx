import CardLayout from "../layouts/CardLayout"

export default function BioCard({name, stats}) {
    return (
        <CardLayout>
            <h3 className="text-xl font-medium mb-1">{name}</h3> 
            <div className='w-full flex flex-row justify-between'>
                <div><p className=" text-sm inline ml-1">stats
                </p></div>
            </div>
        </CardLayout>
    );
}