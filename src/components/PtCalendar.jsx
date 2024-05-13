import Calendar from "react-calendar";
import "./CalendarStyles.css";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const calendar_classes = [
  {
    date: "2024-05-08",
    scheduled: [
      {
        key: 0,
        type: "pt",
        client_name: "John Doe",
        hour: "10:00",
        duration: "1h",
      },
      {
        key: 1,
        type: "pt",
        client_name: "Jane Doe",
        hour: "11:00",
        duration: "1h",
      },
      {
        key: 2,
        type: "group",
        hour: "15:00",
        duration: "1h",
        gtype: "Cycling",
      },
    ],
  },
  {
    date: "2024-05-02",
    scheduled: [
      {
        key: 0,
        type: "pt",
        client_name: "Nuno Santos",
        hour: "08:00",
        duration: "1h",
      },
      {
        key: 1,
        type: "group",
        hour: "09:00",
        duration: "1h",
        gtype: "Crossfit",
      },
      {
        key: 2,
        type: "pt",
        client_name: "John Doe",
        hour: "15:00",
        duration: "1h",
      },
      {
        key: 3,
        type: "pt",
        client_name: "Jane Doe",
        hour: "18:00",
        duration: "1h",
      },
    ],
  },
];

export default function PtCalendar() {
  const [currentClass, setCurrentClass] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const onLogClick = (day) => {
    const log = calendar_classes.find((log) => {
      return new Date(log.date).getDate() === day.getDate();
    });
    setCurrentClass(log);
    if (log) setIsOpen(true);
  };

  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (isSpecialDay(date)) {
        return "text-red-500";
      }
    }
  };

  const isSpecialDay = (date) => {
    return calendar_classes.some((log) => {
      return new Date(log.date).getDate() === date.getDate();
    });
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50 "
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-lg max-h-[80%] overflow-y-scroll border bg-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold">Scheduled Classes</h2>
            <div className="mt-6">
              <h2 className="text-xl font-bold inline">Date: </h2>
              <p className="inline">{currentClass?.date}</p>
            </div>
            {currentClass?.scheduled.map((_class) => {
              return (
                (_class.type === "pt" && (
                  <div
                    className="rounded-lg w-full h-fit shadow-md p-5 my-3 flex flex-col bg-base-200"
                    key={_class.key}
                  >
                    <h3 className="text-xl font-bold mb-1">
                      {_class.client_name}
                    </h3>
                    <div className="w-full flex flex-row">
                      <div>
                        <p className="text-sm font-bold inline">Time:</p>
                        <p className="text-md inline ml-1">{_class.hour}</p>
                      </div>
                      <div className="ml-2">
                        <p className="text-md font-bold inline">Duration:</p>
                        <p className="text-md inline ml-1">{_class.duration}</p>
                      </div>
                    </div>
                  </div>
                )) ||
                (_class.type === "group" && (
                  <div
                    className="rounded-lg w-full h-fit shadow-md p-5 my-3 flex flex-col bg-base-300"
                    key={_class.key}
                  >
                    <h3 className="text-xl font-bold mb-1">
                      {_class.gtype} class
                    </h3>
                    <div className="w-full flex flex-row">
                      <div>
                        <p className="text-sm font-bold inline">Time:</p>
                        <p className="text-md inline ml-1">{_class.hour}</p>
                      </div>
                      <div className="ml-2">
                        <p className="text-md font-bold inline">Duration:</p>
                        <p className="text-md inline ml-1">{_class.duration}</p>
                      </div>
                    </div>
                  </div>
                ))
              );
            })}
          </Dialog.Panel>
        </div>
      </Dialog>
      <Calendar tileClassName={tileClassName} onClickDay={onLogClick} />
    </>
  );
}
