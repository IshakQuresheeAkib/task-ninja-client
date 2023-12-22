import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from '../../Pages/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },       
      ]     
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/signup',
      element:<SignUp></SignUp>
    },
    {
      path:'/dashboard',
      element:<PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>
    }
  ]);