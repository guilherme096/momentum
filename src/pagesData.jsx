import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import TrainingSupport from "./pages/TrainingSupport/TrainingSupport"
import Profile from "./pages/Profile/Profile"


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
  }
];

export default pagesData;
