import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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

export default function PTClientsCalendar() {
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
                return "react-calendar-workout";
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
                                    <div className="flex flex-row rounded-lg w-full h-fit shadow-md p-5 my-3 bg-base-200 justify-between items-center">
                                        <div>
                                            <div className="flex flex-col" key={_class.key}>
                                                <h3 className="text-xl font-bold mb-1">
                                                    {_class.client_name}
                                                </h3>
                                                <div className="w-full flex flex-row">
                                                    <div>
                                                        <p className="text-sm font-bold inline">Time:</p>
                                                        <p className="text-md inline ml-1">{_class.hour}</p>
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-md font-bold inline">
                                                            Duration:
                                                        </p>
                                                        <p className="text-md inline ml-1">
                                                            {_class.duration}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-7 h-7 ">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="#5c5c5c"
                                                    d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"
                                                />
                                            </svg>{" "}
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
