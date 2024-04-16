import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';


export default function Header() {
    return(
        <header className="flex justify-between items-center text px-5 py-3">
            <h1 className="text-2xl font-bold text-primary text-left">Momentum</h1>
            <FontAwesomeIcon icon={faCog} className='text-right size-6'/>
        </header>

    
    )
}