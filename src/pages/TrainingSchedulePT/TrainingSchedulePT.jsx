import PageLayoutPT from "../../layouts/PageLayoutPT";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CardLayout from "../../layouts/CardLayout";
import { Link } from "react-router-dom";
import { Fragment, useState, useEffect, useRef } from "react";
import TrainingCombobox from "../../components/Combobox";

const people = [
  { id: 0, name: "None" },
  { id: 1, name: "Diogo Costa" },
  { id: 2, name: "Ana Pires" },
  { id: 3, name: "Sara Matos" },
  { id: 4, name: "Joao Mário" },
];

const train = [
  { id: 0, name: "None" },
  { id: 1, name: "Full Body" },
  { id: 2, name: "Upper Body" },
  { id: 3, name: "Lower Body" },
  { id: 8, name: "Calisthenics" },
];

export default function TrainingSchedulePT() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [selectedPlan, setSelectedPlan] = useState(train[0]);
  const [isOpenPerson, setIsOpenPerson] = useState(false);
  const [isOpenPlan, setIsOpenPlan] = useState(false);

  const togglePersonDropdown = (isOpen) => {
    setIsOpenPerson(isOpen);
  };

  const togglePlanDropdown = (isOpen) => {
    setIsOpenPlan(isOpen);
  };

  return (
    <>
      <PageLayoutPT pageName="Training Schedule">
        <h1 className="text-xl font-bold mb-2">Specifications</h1>
        <div className="card shadow-sm">
          <div className="m-5">
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Client</h1>
              <div className="w-40">
                <TrainingCombobox
                  items={people}
                  label=""
                  onChange={setSelectedPerson}
                  onToggle={togglePersonDropdown}
                  dropdownStyle={{ zIndex: isOpenPerson ? 100 : 1 }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <h1 className="text-xl">Plan</h1>
              <div className="w-40">
                <TrainingCombobox
                  items={train}
                  label=""
                  onChange={setSelectedPlan}
                  onToggle={togglePlanDropdown}
                  style={{ zIndex: isOpenPlan ? 2 : 1 }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-xl font-bold">Date</h1>
          <div className="my-4">
            <Calendar />
          </div>
        </div>

        <div className="mt-7">
          <h1 className="text-xl font-bold">Details</h1>
          <div className="mt-1">
            <textarea
              placeholder=""
              className="textarea textarea-bordered textarea-lg w-full max-w"
            ></textarea>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full mx-auto px-3 pr-8 pl-8 space-x-32 mt-5">
          <Link to="/my-clients">
            <button
              className="btn btn-outline btn-lg btn-primary flex-1"
              style={{ width: 100 }}
            >
              Cancel
            </button>
          </Link>
          <Link to="/my-clients">
            <button
              className="btn btn-lg btn-primary text-white flex-1"
              style={{ width: 100 }}
            >
              Add
            </button>
          </Link>
        </div>
      </PageLayoutPT>
    </>
  );
}
