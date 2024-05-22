import PageLayout from "../../layouts/PageLayout";
import ConfirmationModal from "../../components/ConfirmationModal";
import { useRef } from "react";

export default function ClassSchedule({ class_obj }) {
  const n = class_obj.ocupation_math;
  const ConfirmationModalRef = useRef(null);

  const handleModal = () => {
    ConfirmationModalRef.current.showModal();
  };

  function showSuccess() {
    alert("Success");
  }

  return (
    <>
      <PageLayout pageName="Classes">
        <div className="flex flex-col max-w-full">
          <div className="rounded-md overflow-clip">
            <img
              src={class_obj.image}
              alt="classImage"
              style={{ width: "100%", height: "12rem" }}
            />
          </div>
          <div className="flex justify-between items-end ">
            <h1 className="text-3xl font-bold mt-2">{class_obj.name}</h1>
            <h3 className="stat-title text-xl mb-1">
              Teacher: {class_obj.teacher}{" "}
            </h3>
          </div>
          <div>
            <p className="text-lg font-light mt-2 text-justify">
              {class_obj.description}
            </p>
          </div>
        </div>
        <ConfirmationModal />
      </PageLayout>
      <div className="flex fixed justify-between items-center bottom-20 w-full mx-auto px-3">
        <div className="stats lg:stats-horizontal shadow-lg min-w-full items-center overflow-clip bg-gray-50">
          <div className="stat text-center justify-center">
            <div className="stat-title mb-6 text-xs">Timestamp</div>
            <div className="stat-value text-sm items-center text-center">
              {class_obj.date}
            </div>
            <div className="stat-value text-sm items-center text-center mb-2">
              {class_obj.time}
            </div>
          </div>
          <div className="stat flex flex-col text-center justify-center">
            <div className="stat-title items-center text-xs justify-center">
              Lotation
            </div>
            <div>
              <div
                className="stat-value radial-progress text-sm mt-2 items-center justify-center"
                style={{
                  "--value": 100 * n,
                  "--size": "4rem",
                  "--thickness": "4px",
                }}
                role="progressbar"
              >
                {class_obj.ocupation}
              </div>
            </div>
          </div>
          <div className="stat flex justify-center items-center h-full">
            <button
              className="btn bg-primary text-white font-bold rounded w-16 h-16 justify-center items-center"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
