import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

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
    element: <></>,
    title: "training-support",
  },
  {
    path: "profile",
    element: <></>,
    title: "profile",
  }
];

export default pagesData;