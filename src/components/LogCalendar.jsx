import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { exercise_logs, exercises } from "../info";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import ExerciseCard from "./ExerciseCard";

export default function LogCalendar() {
  const [currentLog, setCurrentLog] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onLogClick = (day) => {
    const log = exercise_logs.find((log) => {
      return new Date(log.date).getDate() === day.getDate();
    });
    setCurrentLog(log);
    if (log) setIsOpen(true);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (isSpecialDay(date)) {
        return "text-red-500";
      }
    }
  };

  const isSpecialDay = (date) => {
    return exercise_logs.some((log) => {
      return new Date(log.date).getDate() === date.getDate();
    });
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg max-h-[80%] overflow-y-scroll border bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold">Workout Log</h2>
            <div className="mt-6">
              <h2 className="text-xl font-bold inline">Date: </h2>
              <p className="inline">{currentLog?.date}</p>
            </div>
            {currentLog?.duration && (
              <div>
                <h2 className="text-xl font-bold inline">Duration: </h2>
                <p className="inline">{currentLog?.duration}</p>
              </div>
            )}

            <h2 className="text-xl font-bold mt-4">Exercises</h2>
            {currentLog?.exercises_done.map((exercies_logged) => {
              return (
                <ExerciseCard
                  key={exercies_logged.id}
                  name={
                    exercises.find(
                      (exercise) => exercise.id === exercies_logged.id,
                    ).name
                  }
                  sets={exercies_logged.sets}
                  reps={exercies_logged.reps}
                  weight={exercies_logged.weight}
                />
              );
            })}
          </Dialog.Panel>
        </div>
      </Dialog>
      <Calendar tileClassName={tileClassName} onClickDay={onLogClick} />
    </>
  );
}
