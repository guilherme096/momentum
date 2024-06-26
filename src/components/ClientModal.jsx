import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ClientModal({ client, onClose }) {
  useEffect(() => {
    if (client) {
      document.getElementById("my_modal_2").showModal();
    }
  }, [client]);

  if (!client) return null;

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <dialog id="my_modal_2" className="modal" onClick={handleOutsideClick}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center space-x-12 mt-1">
          <div className="avatar">
            <div className="w-24 h-24 rounded-xl overflow-hidden">
              <img
                src={client.img}
                alt={client.name}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between ">
            <h1 className="font-bold text-xl">{client.name}</h1>
            <h1 className="text-2lg stat-title mt-2">Age: {client.age}</h1>
            <h1 className="text-2lg stat-title">Joined: {client.joined}</h1>
          </div>
        </div>
        <div className="mt-5 p-5 shadow-md">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-md">
                {" "}
                <span className="font-bold ">Weight: </span> {client.weight}
              </div>
              <p className="text-md">
                {" "}
                <span className="font-bold"> Height: </span>
                {client.height}
              </p>
            </div>
            <div className="">
              <p className="text-md">
                {" "}
                <span className="font-bold">Fat Mass: </span>
                {client.fm}
              </p>
              <p className="text-md">
                {" "}
                <span className="font-bold">Lean Mass: </span>
                {client.lm}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-row justify-center items-center space-x-9">
          <div className="flex text-lg ">
            <div className="flex flex-col">
              <div className="font-bold">Next </div>
              <div className="-mt-2 font-bold">Class</div>
            </div>
            <div className="flex items-center ml-1 font-bold text-xl">:</div>
          </div>
          <div className="flex items-center flex-col justify-between">
            <div className="flex flex-row items-center">
              <div className="text-3xl font-bold">{client.day}</div>
              <div className="flex flex-col ml-2 items-center ">
                <div className="text-sm leading-tight">{client.mon}</div>
                <div className="text-sm leading-tight">{client.year}</div>
              </div>
              <div className="border border-gray-500 py-3 mr-3 ml-3"></div>
              <div className="text-2xl font-bold">{client.time}</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <button
            className="btn btn-primary w-full text-white"
            onClick={() => {}}
          >
            <Link
              to="/training-schedule-pt-client"
              className="w-full h-full flex flex-col justify-center items-center"
            >
              Add Class
            </Link>
          </button>
        </div>
      </div>
    </dialog>
  );
}
