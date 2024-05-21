import PageLayout from "../../layouts/PageLayout";
import { Link } from "react-router-dom";
import DailyAgenda from "../../components/DailyAgenda";
import AulasCard from "../../components/AulasCard";
import { useState } from "react";

const classes = [
  [
    {
      name: "CrossFit",
      startTime: "10 AM",
      endTime: "11 AM",
      color: "#fbf8cc",
    },

    {
      name: "Cycling",
      startTime: "1 PM",
      endTime: "3 PM",
      color: "#fde4cf",
    },
    {
      name: "Yoga",
      startTime: "8 AM",
      endTime: "9 AM",
      color: "#ffcfd2",
    },
    {
      name: "Pilates",
      startTime: "5 PM",
      endTime: "6 PM",
      color: "#d1ffe6",
    },
    {
      name: "Boxing",
      startTime: "7 PM",
      endTime: "8 PM",
      color: "#a3c4f3",
    },
  ],
  [
    {
      name: "CrossFit",
      startTime: "10 AM",
      endTime: "11 AM",
      color: "#fbf8cc",
    },
    {
      name: "Cycling",
      startTime: "1 PM",
      endTime: "3 PM",
      color: "#fde4cf",
    },
    {
      name: "Pilates",
      startTime: "5 PM",
      endTime: "6 PM",
      color: "#d1ffe6",
    },
  ],
  [
    {
      name: "CrossFit",
      startTime: "10 AM",
      endTime: "11 AM",
      color: "#fbf8cc",
    },
    {
      name: "Yoga",
      startTime: "8 AM",
      endTime: "9 AM",
      color: "#ffcfd2",
    },
    {
      name: "Pilates",
      startTime: "5 PM",
      endTime: "6 PM",
      color: "#d1ffe6",
    },
  ],
  [
    {
      name: "CrossFit",
      startTime: "10 AM",
      endTime: "11 AM",
      color: "#fbf8cc",
    },
    {
      name: "Yoga",
      startTime: "8 AM",
      endTime: "9 AM",
      color: "#ffcfd2",
    },
    {
      name: "Pilates",
      startTime: "5 PM",
      endTime: "6 PM",
      color: "#d1ffe6",
    },
  ],
  [
    {
      name: "CrossFit",
      startTime: "10 AM",
      endTime: "11 AM",
      color: "#fbf8cc",
    },
    {
      name: "Cycling",
      startTime: "1 PM",
      endTime: "3 PM",
      color: "#fde4cf",
    },
    {
      name: "Yoga",
      startTime: "8 AM",
      endTime: "9 AM",
      color: "#ffcfd2",
    },
    {
      name: "Pilates",
      startTime: "5 PM",
      endTime: "6 PM",
      color: "#d1ffe6",
    },
    {
      name: "Boxing",
      startTime: "7 PM",
      endTime: "8 PM",
      color: "#a3c4f3",
    },
  ]
];

export default function ClientScheduleHome() {
  const clientBookings =
    JSON.parse(localStorage.getItem("scheduled_classes")) || [];

  console.log(clientBookings);

  return (
    <PageLayout pageName="Class Schedule">
      <h1 className="text-xl font-bold my-3">Your bookings</h1>
      <div className="flex flex-row overflow-auto space-x-0">
        {(clientBookings.length > 0 &&
          clientBookings
            .sort(
              (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime),
            )
            .map((cls, index) => (
              <div key={index} className="shrink-0 w-22">
                <AulasCard
                  name={cls.name}
                  date={cls.date}
                  time={cls.startTime + " - " + cls.endTime}
                />
              </div>
            ))) || <div className="text-center w-full">No bookings</div>}
      </div>
      <div>
        <h1 className="text-xl font-bold mt-2"> All bookings</h1>
      </div>

      <DailyAgenda link={"/class-schedule"} classes={classes} />
    </PageLayout>
  );
}

function timeToMinutes(time) {
  const [hour, modifier] = time.split(" ");
  let [hours, minutes] = hour.split(":");
  hours = parseInt(hours, 10);
  minutes = minutes ? parseInt(minutes, 10) : 0;

  // Convert "PM" hours to 24-hour time
  if (modifier === "PM" && hours !== 12) {
    hours += 12;
  } else if (modifier === "AM" && hours === 12) {
    hours = 0; // Midnight edge case
  }

  return hours * 60 + minutes;
}
