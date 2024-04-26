export default function CardLayout({children, bgColor = "bg-neutral-200", width = "w-32", height = "h-auto", hasImage = false, image = ""}) {
    const styling = `overflow-clip rounded-lg m-2 ${width} ${height} drop-shadow-lg ${bgColor} aspect-square`;
    return(
        <div className={styling}>
            {hasImage && <figure className="h-2/3 overflow-clip"><img className="object-cover h-full bg-cover" src={image} /></figure>}
            <div className="card-body px-4 py-3">
                {children} 
            </div>
        </div>
    )
}
