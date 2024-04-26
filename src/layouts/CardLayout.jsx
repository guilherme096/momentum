export default function CardLayout({children, bgColor = "bg-neutral-200", width = "w-32", height = "h-32"}) {
    const styling = `card rounded-lg m-2 max-${width} max-${height}  w-fit h-fit drop-shadow-lg ${bgColor} aspect-square`;
    return(
        <div className={styling}>
            <div className="card-body">
                {children} 
            </div>
        </div>
    )
}
