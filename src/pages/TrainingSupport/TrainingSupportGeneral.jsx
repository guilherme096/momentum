import LogCalendar from "../../components/LogCalendar";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";
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
            <button className="h-20 w-full rounded-md bg-primary font-bold flex flex-col justify-center items-center">
              <Link
                className="w-full h-full text-center flex flex-col justify-center items-center"
                to="/start-train"
              >
                Start
              </Link>
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <h1 className="text-2xl font-bold">Training Logs</h1>
        <div className="flex flex-col w-full h-fit justify-center items-center mt-3">
          <LogCalendar />
        </div>
        <h1 className="text-2xl font-bold mt-6">Workout Presets</h1>
        <div className="flex flex-row flex-wrap justify-around items-center mt-5">
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
