/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TheContext } from "../Auth Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { BarLoader } from "react-spinners";

const PrivetRoute = ({children}) => {
    const{loding , user}=useContext(TheContext)

    if(loding){
        return <BarLoader color="rgba(255, 0, 0, 1)" />
    }
    
    if( user){
        return children
    }
    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

export default PrivetRoute;