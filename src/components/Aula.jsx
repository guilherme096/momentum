import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "./ConfirmationModal";

export default function Aula({ index, startr, rowS, bgColor, aula, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggles the state which controls the modal visibility
  };

  const handleClassClick = () => {
    navigate(link, {
      state: { class_obj: aula },
    });
  };

  return (
    <>
      <div
        key={index}
        style={{
          gridColumnStart: 2,
          gridRowStart: startr,
          gridRowEnd: startr + rowS,
          backgroundColor: bgColor,
        }}
        className="border border-[#f2d3d8] rounded-lg p-2 m-2 flex justify-between overflow-hidden"
      >
        <div onClick={handleClassClick} className="flex-grow p-2 cursor-pointer">
          <div className="flex flex-col">
            <p className="font-semibold">{aula.name}</p>
            <p className="text-sm text-gray-600">
              {aula.startTime} - {aula.endTime}
            </p>
          </div>
        </div>
        <button onClick={toggleModal} className="p-2 pr-6 w-3 h-14">
          <FontAwesomeIcon icon={faPlusCircle} className="text-lg" />
        </button>
        <ConfirmationModal isOpen={isModalOpen} aula={aula} />
      </div>
    </>
  );
}
