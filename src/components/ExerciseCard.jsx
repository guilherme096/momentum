export default function ExerciseCard({ name, sets, reps, weight }) {
  return (
    <div className="rounded-lg w-full h-fit shadow-md p-5 my-1 flex flex-col bg-base-200">
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <div className="w-full flex flex-row justify-between">
        <div>
          <p className="text-sm font-bold inline">Sets:</p>
          <p className="text-lg inline ml-1">{sets}</p>
        </div>
        <div>
          <p className="text-sm font-bold inline">Repetitions:</p>
          <p className="text-lg inline ml-1">{reps}</p>
        </div>
        <div>
          <p className="text-sm font-bold inline">Weight:</p>
          <p className="text-lg inline ml-1">{weight}</p>
        </div>
      </div>
    </div>
  );
}
