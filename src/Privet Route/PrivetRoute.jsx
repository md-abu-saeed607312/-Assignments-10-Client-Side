/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TheContext } from "../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { BarLoader } from "react-spinners";

const PrivetRoute = ({children}) => {
    const{loding , user}=useContext(TheContext)
    const locationUsed=useLocation()




    if(loding){
        return <BarLoader color="rgba(255, 0, 0, 1)" />
    }
    
    if( user){
        return children
    }
    return (
        <div>
            <Navigate to="/login"
            state={locationUsed.pathname}
            ></Navigate>
        </div>
    );
};

export default PrivetRoute;