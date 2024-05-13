import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export default function Header({ pageName }) {
    return (
        <header className="z-50 flex justify-between items-center px-5 py-3 text-2xl font-bold text-primary sticky top-0 bg-base-100 font-sans">
            <h1>{pageName}</h1>
            <button>
                <Link to={'/settings' }>
                    <FontAwesomeIcon icon={faCog} className='size-6'/>
                </Link>
            </button>
        </header>
    );
}
