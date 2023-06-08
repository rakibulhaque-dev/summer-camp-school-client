import React from 'react';
import { Outlet } from 'react-router-dom';
import PopulerClasses from '../PopulerClasses/PopulerClasses';
import Banner from '../Banner/Banner';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Outlet></Outlet>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;