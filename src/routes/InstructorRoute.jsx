import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useInstructor from '../hooks/useInstructor';
import useAuth from '../hooks/useAuth';
import { RiseLoader } from 'react-spinners';

const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isIstructor, isIstructorLoading] = useInstructor();
    console.log('Instructror Status: ', isIstructor)
    const location = useLocation();

    if(loading || isIstructorLoading){
        return <RiseLoader color="#36d7b7" className='mt-56 text-center' />;
    }
    if(user && isIstructor){
        return children;
    }
    
    return  <Navigate to="/" state={{from: location}} replace></Navigate>;
};

export default InstructorRoute;