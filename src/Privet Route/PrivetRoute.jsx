/* eslint-disable react/prop-types */

import { useContext } from "react";
import { TheContext } from "../Auth Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { loding, user } = useContext(TheContext);
  const locationUsed = useLocation();

  if (loding) {
    return (
      <>
        <div className="flex justify-center items-center">
          <span className="loading loading-bars loading-xl"></span>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login" state={locationUsed.pathname}></Navigate>
    </div>
  );
};

export default PrivetRoute;
