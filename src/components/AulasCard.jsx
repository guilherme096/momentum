import CardLayout from "../layouts/CardLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function AulasCard({ name, time, date }) {
  return (
    <CardLayout>
      <div className="flex items-center ">
        <h3 className="text-xl font-bold mr-2">{name}</h3>
        <button className="flex items-center">
          <FontAwesomeIcon icon={faTrashCan} className="text-lg cursor-pointer text-red-400" />
        </button>
      </div>
      <p className="text-sm mb-0 mt-2">{date}</p>
      <p className="text-sm inline">{time}</p>
    </CardLayout>

  );
}