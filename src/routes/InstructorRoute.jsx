import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import useAuth from '../hooks/useAuth';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isIstructor, isIstructorLoading] = useInstructor();
    const location = useLocation();

    if(loading || isIstructorLoading){
        return <progress className="w-56 progress"></progress>;
    }
    if(user && isIstructor){
        return children;
    }
    
    return  <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default InstructorRoute;