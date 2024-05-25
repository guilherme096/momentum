import PageLayout from "../../layouts/PageLayout";
import EndTrainingModal from "../../components/EndTrainingModal";
import ExerciseCard from "../../components/ExerciseCard";
import { useState } from "react";
import { useEffect } from "react";
import Camera from "../../components/Camera";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import Countdown from "../../components/Countdown";

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
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [currentExercise, setCurrentExercise] = useState(exercises[0]);
  const [sets, setSets] = useState([]);
  const [doneExercises, setDoneExercises] = useState([]);
  const [showCamera, setShowCamera] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        seconds += 1;
        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

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
        <div className="flex flex-row justify-center w-full items-center ">
          <div className="stats  w-full">
            <div className="stat place-items-center">
              <div className="stat-title pb-1">Progress</div>
              <div className="stat-value"> {exerciseIndex}/5</div>
            </div>
          </div>
          <div
            style={{ borderLeft: "1px solid grey", height: "90px" }}
            className="pt-4 pb-4"
          ></div>
          <div className="stats  w-full overflow-clip">
            <div className="stat place-items-center p-0">
              <div className="stat-title pb-1">Timer</div>
              <div className="stat-value countdown font-mono text-md p-0 ml-2">
                <span style={{ "--value": time.hours }}></span>:
                <span style={{ "--value": time.minutes }}></span>:
                <span style={{ "--value": time.seconds }}></span>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-5">Next Exercise</h1>

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
        <div className="flex justify-end items-center w-full -mt-4">
          <button
            className=" text-white  btn bg-error font-boldrounded rounded-md w-full"
            onClick={() => {
              document.getElementById("my_modal_2").showModal();
            }}
          >
            {" "}
            End Training Session
          </button>
        </div>
        <div className="flex flex-row justify-between items-center w-full my-4 pr-2 pt-3">
          <div className="text-2xl font-bold">Exercises</div>
          <p className="text-md w-fit underline text-primary">Expand List</p>
        </div>
        <div className="px-4 text-lg font-semibold mb-0">Next Exercise</div>

        <div className="flex flex-row flex-wrap justify-between items-center mx-3">
          <ExerciseCard
            name="Leg Press"
            sets="3"
            reps="12"
            weight="150kg"
          ></ExerciseCard>
        </div>
        <div className="px-4 text-lg font-semibold mb-0 mt-6">
          Exercise Done
        </div>
        <div className="flex flex-row flex-wrap justify-between items-center mx-3">
          {doneExercises &&
            doneExercises.map((exercise, index) => (
              <ExerciseCard
                key={index}
                name={exercise.name}
                sets={exercise.sets}
                reps={exercise.reps}
                weight={exercise.weight}
              ></ExerciseCard>
            ))}
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
                  className="btn btn-primary text-white"
                  onClick={() => {
                    setCurrentExercise(exercises[1]);
                    setExerciseIndex(exerciseIndex + 1);
                    setDoneExercises([...doneExercises, currentExercise]);
                  }}
                >
                  Complete
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </PageLayout>
    </>
  );
}
