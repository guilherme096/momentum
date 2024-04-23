import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default function Header({ pageName }) {
    return (
        <header className="flex justify-between items-center px-5 py-3 text-2xl font-bold text-primary sticky top-0 bg-white">
            <h1>{pageName}</h1>
            <FontAwesomeIcon icon={faCog} className='size-6'/>
        </header>
    );
}
