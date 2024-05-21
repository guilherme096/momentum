import PageLayout from "../../layouts/PageLayout";
import { Fragment, useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import TrainingCombobox from "../../components/Combobox";

const people = [
  { id: 0, name: "None" },
  { id: 1, name: "Full Body" },
  { id: 2, name: "Upper Body" },
  { id: 3, name: "Lower Body" },
  { id: 4, name: "Bicep" },
  { id: 5, name: "Tricep" },
  { id: 6, name: "Leg" },
  { id: 7, name: "Chest" },
  { id: 8, name: "Calisthenics" },
];

export default function StartTrain() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [isOpen, setIsOpen] = useState(false);
  const comboboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <PageLayout pageName="Training Support">
      <div className="flex flex-col justify-center align-middle items-center h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold">New Session</h1>
        </div>
        <div>
          <TrainingCombobox items={people} label="Training Preset" />
          <label className="flex items-center mt-6">
            <input type="checkbox" className="checkbox mr-2" />
            <span>Time this session</span>
          </label>
          <div className="pt-10 justify-center flex w-full">
            <Link to="/training-support">
              <button className="btn btn-wide btn-primary mx-auto btn-xl text-white">
                Begin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
