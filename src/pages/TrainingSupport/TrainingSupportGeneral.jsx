import LogCalendar from "../../components/LogCalendar";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const presets = [
  "Full Body",
  "Upper Body",
  "Lower Body",
  "Bicep",
  "Tricep",
  "Leg",
  "Chest",
  "Calisthenics",
];
export default function TrainingSupportGeneral() {
  return (
    <>
      <PageLayout pageName="Training Support">
        <div className="rounded-lg shadow-lg p-4 bg-base-200">
          <h1 className="text-2xl font-bold">New Session</h1>
          <div className="flex flex-col w-full h-fit justify-center items-center mt-4">
            <button className="h-16 w-full rounded-lg overflow-auto font-bold flex flex-col justify-center items-center text-white">
              <Link
                className="w-full bg-green-700 btn h-full text-white rounded-lg text-center flex flex-col justify-center items-center text-xl"
                to="/start-train"
              >
                Start
              </Link>
            </button>
          </div>
        </div>
        <h1 className="text-2xl font-bold mt-5">Training Logs</h1>
        <div className="flex flex-col w-full h-fit justify-center items-center mt-3">
          <LogCalendar />
        </div>
        <div className="flex flex-row justify-between items-center mt-4">
          <h1 className="text-2xl font-bold ">Workout Presets</h1>
          <div className="p-4">
            <FontAwesomeIcon icon={faPlusCircle} className="size-5" />
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-around items-center mt-5 mb-16">
          {presets.map((preset) => (
            <div className="flex flex-col justify-center items-center text-center h-32 w-32 rounded-lg bg-base-200 p-4 shadow-lg font-semibold m-4">
              {preset}
            </div>
          ))}
        </div>
      </PageLayout>
    </>
  );
}
