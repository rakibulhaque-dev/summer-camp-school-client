import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;