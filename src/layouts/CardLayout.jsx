export default function CardLayout({children, bgColor = "bg-neutral-800"}) {
    const styling = `p-4 rounded-lg m-2 min-h-32 min-w-32 w-fit h-fit drop-shadow-lg ${bgColor}`;
    return(
        <div className={styling}>
            {children} 
        </div>
    )
}
