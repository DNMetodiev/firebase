import {
  createBrowserRouter,
} from "react-router-dom"
import Login from "../Pages/Login"
import Register from "../Pages/Register"
import Home from "../Pages/Home"
import HomeLayout from "../layouts/HomeLayout";
import ProfileLayout from "../layouts/ProfileLayout";
{/*Create the path for the URL routing /login will lead to the login page */ }
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <HomeLayout />,
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
  }
]);