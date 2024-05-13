import { Link } from "react-router-dom";

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
            <Link to="/client-schedule-home">
              <button
                onClick={() => {
                  var scheduled_classes = JSON.parse(
                    localStorage.getItem("scheduled_classes"),
                  );
                  console.log(scheduled_classes);
                  var new_class = {
                    name: "CrossFit",
                    teacher: "Kevin G.",
                    date: "2024-05-09",
                    startTime: "10 AM",
                    endTime: "11 AM",
                  };
                  if (scheduled_classes === null) {
                    scheduled_classes = [];
                  }
                  localStorage.setItem(
                    "scheduled_classes",
                    JSON.stringify([...scheduled_classes, new_class]),
                  );
                }}
                className="btn bg-primary btn-md text-white ml-3"
              >
                Confirm
              </button>
            </Link>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}
