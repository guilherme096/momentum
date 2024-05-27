import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ConfirmationModal({ isOpen, aula }) {
  const dialogRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      dialogRef.current.showModal();
    } else if (dialogRef.current && dialogRef.current.open) {
      dialogRef.current.close();
    }
  }, [isOpen]);

  const handleConfirm = () => {
    const scheduled_classes =
      JSON.parse(localStorage.getItem("scheduled_classes")) || [];
    localStorage.setItem(
      "scheduled_classes",
      JSON.stringify([...scheduled_classes, aula]),
    );
    console.log(scheduled_classes);

    // Conditionally navigate or close modal
    if (location.pathname === "/client-schedule-home") {
      dialogRef.current.close();
    } else {
      navigate("/client-schedule-home");
    }
  };

  return (
    <dialog ref={dialogRef} id="my_modal_2" className="modal">
      <div className="modal-box">
        <h1 className="font-bold text-xl">{aula.name}</h1>
        <p>Are you sure?</p>
        <div className="flex flex-row items-end justify-end -mt-4">
          <form className="modal-action">
            <button
              type="button"
              className="btn btn-md btn-error btn-outline text-white"
              onClick={() => dialogRef.current.close()}
            >
              Cancel
            </button>
          </form>
          <form className="modal-action">
            <button
              type="button"
              className="btn bg-primary btn-md text-white ml-3"
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button type="button" onClick={() => dialogRef.current.close()}>
          Close
        </button>
      </form>
    </dialog>
  );
}
