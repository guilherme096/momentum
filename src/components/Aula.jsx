import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import ConfirmationModal from "./ConfirmationModal";

export default function Aula({ index, startr, rowS, bgColor, aula, link }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Toggle modal visibility
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Navigate to class details
  const handleClassClick = () => {
    navigate(link, {
      state: { class_obj: aula },
    });
  };

  // Show success notification
  const showSuccess = () => {
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false); // Hide notification after 2 seconds
    }, 2000);
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
        <div
          onClick={handleClassClick}
          className="flex-grow p-2 cursor-pointer"
        >
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
        <ConfirmationModal
          isOpen={isModalOpen}
          aula={aula}
          callback={showSuccess}
        />
        {success && (
          <div className="rounded px-6 mx-auto fixed bottom-20  w-full left-0 flex flex-col">
            <div
              role="alert"
              className="alert alert-success w-full p-4 bg-green-100 text-green-800 text-center flex flex-row drop-shadow-lg rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 inline-block mr-3"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-sm">Your purchase has been confirmed!</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
