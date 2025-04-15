import React from "react";
import { Navigate } from "react-router-dom";

const getRole = () => {
    const role = localStorage.getItem('role');
    return role;

}

interface props {
    allowedRoles : string[];
    children : React.ReactNode;
}

const RoleBasedRoute : React.FC < props > = ({allowedRoles , children}) => {

    const role = getRole();

    if (!allowedRoles.includes(role ?? '')) {
        return <Navigate to="/home" />;
      }
    
    return <>{children}</>
    
}

export default RoleBasedRoute ;