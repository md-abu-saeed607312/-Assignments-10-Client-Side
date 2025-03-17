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
import ProductDetailss from "../Components/Product Detailss/ProductDetailss";
import Fitness from "../Components/Product All Category/Fitness";
import OutdoorGear from "../Components/Product All Category/OutdoorGear";
import TeamSports from "../Components/Product All Category/TeamSports";
import UpdateProduct from "../Components/Update Produvt/UpdateProduct";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      errorElement:<Error></Error>,
      children: [
        {
          path:"/",
          element:<Home></Home>,
          loader:()=>fetch("http://localhost:5000/all-data")

        },
        {
          path:"/allsports",
          element:<AllSportsEquipment></AllSportsEquipment>,
          loader:()=>fetch("http://localhost:5000/all-data")
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
          path:"/addequipment", 
          element:<PrivetRoute><AddEquipment></AddEquipment></PrivetRoute>
        },
        {
          path:"/myequipment",     
          element:<PrivetRoute><MyEquipment></MyEquipment></PrivetRoute> ,
          loader: () =>fetch("http://localhost:5000/myequipment")
        },
        {
          path:"/product/:id", 
          element:<PrivetRoute><ProductDetailss></ProductDetailss></PrivetRoute>,
          loader: async ({ params }) => {
            const equipmentDetails = await fetch(`http://localhost:5000/product/${params.id}`);
            const myequipmentRes = await fetch("http://localhost:5000/myequipment");
      
            const singleequipmentDetails = await equipmentDetails.json();
            const myequipments = await myequipmentRes.json();

            return { singleequipmentDetails, myequipments};
          }
        }, 
        {
          path:"/fitness", 
          loader:()=>fetch("http://localhost:5000/all-data"),
          element:<Fitness></Fitness>
        },
        {
          path:"/outdoor", 
          loader:()=>fetch("http://localhost:5000/all-data"),
          element:<OutdoorGear></OutdoorGear>
        },
        {
          path:"/teamsports", 
          loader:()=>fetch("http://localhost:5000/all-data"),
          element:<TeamSports></TeamSports>
        },
        {
          path:"/update-product/:id", 
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`),
          element:<PrivetRoute><UpdateProduct></UpdateProduct></PrivetRoute>
        }
        
      ],
    },
  ]);


  export default router