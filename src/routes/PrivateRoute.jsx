import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import RiseLoader from "react-spinners/RiseLoader"

const PrivateRoute = ({children}) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <RiseLoader color="#36d7b7" />
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;