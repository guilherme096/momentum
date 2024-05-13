import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function ConfirmationModal() {
    return(
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h1 className="font-bold text-xl">Are you sure?</h1>
                <label className='flex items-center mt-6'>
                        <input type="checkbox" className="checkbox mr-2" defaultChecked/>
                        <span>Save this training session</span>
                </label>
                <div className='flex flex-row items-end justify-end'>
                    <form className="modal-action">
                        <button className="btn btn-md btn-error btn-outline text-white">Cancel</button>
                    </form>
                    <form className="modal-action">
                        <Link to="/general-training">
                            <button className="btn bg-primary btn-md text-white ml-3">Confirm</button>
                        </Link>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}
