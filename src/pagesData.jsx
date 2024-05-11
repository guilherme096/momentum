import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import TrainingSupport from "./pages/TrainingSupport/TrainingSupport"
import Profile from "./pages/Profile/Profile"
import ClassSchedule from "./pages/ClassSchedule/ClassSchedule"
import PersonalTrainer from "./pages/PersonalTrainer/PersonalTrainer"
import StartTrain from "./pages/TrainingSupport/StartTrain"
import { classes } from "../public/info";
import ClientScheduleHome from "./pages/ClassSchedule/ClientScheduleHome";

const myclass = classes[0];

const pagesData = [
  {
    path: "",
    element: <Home />,
    title: "home",
  },
  {
    path: "login",
    element: <Login />,
    title: "login",
  },
  {
    path: "training-support",
    element: <TrainingSupport />,
    title: "training-support",
  },
  {
    path: "profile",
    element: <Profile/>,
    title: "profile",
  },
  {
    path: "class-schedule",
    element: <ClassSchedule class_obj={myclass}/>,
    title: "class-schedule",
  },
  {
    path: "personal-trainer",
    element: <PersonalTrainer />,
    title: "personal-trainer",
  },
  {
    path: "start-train",
    element: <StartTrain/>,
    title: "start-train",
  },
  {
    path: "client-schedule-home",
    element: <ClientScheduleHome/>,
    title: "client-schedule-home"
  }


];

export default pagesData;
