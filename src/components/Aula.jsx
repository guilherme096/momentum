import { Link } from "react-router-dom";

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
      <Link to={link} className="size-full">
        <p className="font-semibold flex-auto min-w-0">{aula.name}</p>
        <p className="shrink-0 pl-2 text-sm text-gray-600 whitespace-nowrap">
          {aula.startTime} - {aula.endTime}
        </p>
      </Link>
    </div>
  );
}
