import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function Aula({ index, startr, rowS, bgColor, aula, link }) {
  return (
    <div
      key={index}
      style={{
        gridColumnStart: 2,
        gridRowStart: startr,
        gridRowEnd: startr + rowS,
        backgroundColor: bgColor,
      }}
      className={`border border-[#f2d3d8] rounded-lg p-2 m-2 flex items-center justify-start overflow-hidden`}
    >
      <Link to={link} className="size-full flex flex-row justify-between">
        <div>
          <p className="font-semibold flex-auto min-w-0">{aula.name}</p>
          <p className="shrink-0 pl-2 text-sm text-gray-600 whitespace-nowrap">
            {aula.startTime} - {aula.endTime}
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faPlusCircle} className="size-5 p-1" />
        </div>
      </Link>
    </div>
  );
}
