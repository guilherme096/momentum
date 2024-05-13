import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmationModal() {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h1 className="font-bold text-xl">CrossFit Class</h1>
        <p className="">Are you sure?</p>
        <div className="flex flex-row items-end justify-end -mt-4">
          <form className="modal-action">
            <button className="btn btn-md btn-error btn-outline text-white">
              Cancel
            </button>
          </form>
          <form className="modal-action">
            <button className="btn bg-primary btn-md text-white ml-3">
              Confirm
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
