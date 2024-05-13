import PageLayout from "../../layouts/PageLayout";
import EndTrainingModal from "../../components/EndTrainingModal";
import ExerciseCard from "../../components/ExerciseCard";
import { useState } from "react";
import { useEffect } from "react";
import Camera from "../../components/Camera";

const exercises = [
  {
    name: "Squat",
    sets: 2,
    reps: 10,
    weight: 60,
  },
  {
    name: "Leg Press",
    sets: 3,
    reps: 10,
    weight: 150,
  },
];

export default function TrainingSupport() {
  const [currentExercise, setCurrentExercise] = useState(exercises[0]);
  const [sets, setSets] = useState([]);
  const [showCamera, setShowCamera] = useState(false);

  useEffect(() => {
    let tempSets = [];
    for (let i = 1; i <= currentExercise.sets; i++) {
      tempSets.push(i);
    }
    setSets(tempSets);
  }, [currentExercise]);
  return (
    <>
      {showCamera && <Camera />}
      <PageLayout pageName="Training Support">
        <h1 className="text-2xl font-bold mt-0">Next Exercise</h1>
        <div className="rounded-lg w-full h-48 shadow-md p-6 my-6 flex flex-row bg-base-200">
          <div className="w-1/2 ">
            <h3 className="text-2xl font-bold mb-3">{currentExercise.name}</h3>
            <div>
              <p className="text-lg font-bold inline">Sets:</p>
              <p className="text-lg inline ml-1">{currentExercise.reps}</p>
            </div>
            <div>
              <p className="text-lg font-bold inline">Repetitions:</p>
              <p className="text-lg inline ml-1">{currentExercise.reps}</p>
            </div>
            <div>
              <p className="text-lg font-bold inline">Weight:</p>
              <p className="text-lg inline ml-1">{currentExercise.weight}kg</p>
            </div>
          </div>
          <div className="w-1/2 p-3 pl-4">
            <button className="btn btn-error btn-outline font-boldrounded mt-2 w-full">
              Skip
            </button>
            <button
              className="btn btn-primary font-boldrounded mt-2 w-full text-white"
              onClick={() => {
                document.getElementById("exercise_modal").showModal();
              }}
            >
              Next
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-3">Help</h1>
        <div>
          <button
            className="btn btn-outline font-boldrounded mt-2 w-full"
            onClick={() => setShowCamera(true)}
          >
            Scan Machine QR
          </button>
        </div>
        <h1 className="text-2xl font-bold mt-7">Timer</h1>
        <div className="flex flex-col items-center justify-between">
          <h1 className="text-6xl font-bold"> 00:00</h1>
          <div className="flex flex-row justify-between mt-2 max-w-[165px] w-full">
            <button className="btn btn-md btn-outline btn-circle text-primary p-3">
              <svg
                className="max-w-full max-h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#4556b0"
                  d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
                />
              </svg>
            </button>
            <button className="btn btn-md btn-circle text-primary p-3">
              <svg
                className="max-w-full max-h-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="#4678ce"
                  d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"
                />
              </svg>
            </button>
            <button className="btn btn-md btn-outline btn-circle text-primary p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-full max-h-full"
                viewBox="0 0 384 512"
              >
                <path
                  fill="#406bb5"
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"
                />
              </svg>
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-10">Upcoming Exercises</h1>
        <div className="flex flex-row flex-wrap justify-between items-center mx-3 pt-3">
          <ExerciseCard
            name="Leg Press"
            sets="3"
            reps="12"
            weight="20kg"
          ></ExerciseCard>
        </div>
        <h1 className="text-2xl font-bold mt-7">Exercises Done</h1>
        <div className="flex flex-row flex-wrap justify-between items-center mx-3 pt-3">
          <ExerciseCard
            name="Leg Press"
            sets="3"
            reps="12"
            weight="20kg"
          ></ExerciseCard>
        </div>
        <EndTrainingModal></EndTrainingModal>
        <dialog id="exercise_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-xl">Complete Exercise</h3>
            {sets &&
              sets.map((sets, index) => (
                <div className="p-0 mt-6" key={index}>
                  <p className="text-lg font-bold ml-3">Set {sets}</p>
                  <div className="rounded-md w-full shadow-lg h-fit mt-1">
                    <div className="flex flex-row justify-between p-3">
                      <div>
                        <p className="text-lg font-bold">Reps</p>
                        <input
                          type="text"
                          placeholder="12"
                          value={currentExercise.reps}
                          className="w-[20px] border-2 text-center rounded-sm"
                        />{" "}
                        <p className="text-lg inline">
                          {" "}
                          / {currentExercise.reps}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg font-bold">Weight</p>
                        <input
                          type="text"
                          placeholder="20kg"
                          value={currentExercise.weight}
                          className="w-[24px] border-2 text-center rounded-sm"
                        />{" "}
                        <p className="text-lg inline">
                          kg / {currentExercise.weight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-error btn-outline mr-3">
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    setCurrentExercise(exercises[1]);
                  }}
                >
                  Complete
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </PageLayout>

      <div className="flex fixed justify-end items-center bottom-20 w-full pr-3 pl-3">
        <button
          className=" text-white  btn bg-error btn-outline font-boldrounded  rounded-md mt-2 w-full"
          onClick={() => {
            document.getElementById("my_modal_2").showModal();
          }}
        >
          {" "}
          End Training Session
        </button>
      </div>
    </>
  );
}
