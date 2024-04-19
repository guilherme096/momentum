import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import TrainingSupport from "./pages/TrainingSupport/TrainingSupport"
import Profile from "./pages/Profile/Profile"
import ClassSchedule from "./pages/ClassSchedule/ClassSchedule"
import { classes } from "../public/info";

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
  }

];

export default pagesData;
