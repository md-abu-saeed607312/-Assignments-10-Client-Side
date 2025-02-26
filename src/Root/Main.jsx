import {
    createBrowserRouter
  } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Components/Home/Home";
import Error from "../Components/Error Pegs/Error";
import AllSportsEquipment from "../Components/All Sports Equipment/AllSportsEquipment";
import About from "../Components/About/About";
import Login from "../Login/Login";
import SignUp from "../Sign Up/SignUp";
import AddEquipment from "../Components/Add Equipment/AddEquipment";
import MyEquipment from "../Components/My Equipment List/MyEquipment ";
import PrivetRoute from "../Privet Route/PrivetRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:<Error></Error>,
      children: [
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/allsports",
          element:<AllSportsEquipment></AllSportsEquipment>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/addequipment", 
          element:<PrivetRoute><AddEquipment></AddEquipment></PrivetRoute>
        },
        {
          path:"/myequipment",     
          element:<PrivetRoute><MyEquipment></MyEquipment></PrivetRoute>
        }
      ],
    },
  ]);


  export default router