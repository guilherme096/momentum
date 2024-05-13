import CardLayout from "../layouts/CardLayout";

export default function ExerciseCard({ name, time, date }) {
  return (
    <CardLayout>
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-sm mb-0 mt-2">{date}</p>
      <p className="text-sm inline">{time}</p>
    </CardLayout>
  );
}
