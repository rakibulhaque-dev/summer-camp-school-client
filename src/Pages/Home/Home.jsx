    import React, { useEffect, useState } from 'react';
    import { Outlet } from 'react-router-dom';
    import PopulerClasses from '../PopulerClasses/PopulerClasses';
    import Banner from '../Banner/Banner';
    import PopularInstructors from '../PopularInstructors/PopularInstructors';
    import Schedule from '../../Extra/Schedule';
    import NavBar from '../../Shared/NavBar/NavBar';
    import AOS from 'aos';
    import 'aos/dist/aos.css';
    import { FaPeopleArrows } from 'react-icons/fa';
    import '../../../src/index.css'
    import 'typeface-kanit';
    

    const Home = () => {

        const [isDarkMode, setIsDarkMode] = useState(false);

        useEffect(() => {
            const savedMode = localStorage.getItem('mode');
            setIsDarkMode(savedMode === 'dark');
        }, []);

        const toggleMode = () => {
            const newMode = !isDarkMode;
            setIsDarkMode(newMode);
            localStorage.setItem('mode', newMode ? 'dark' : 'light');
        };

        useEffect(()=>{
            AOS.init()
        },[])
    
        return (
            <div className={`container mx-auto bg-${isDarkMode ? 'black' : 'white'} text-${isDarkMode ? 'white' : 'black'}`}>
                <NavBar toggleMode={toggleMode} isDarkMode={isDarkMode}></NavBar>
                <Outlet></Outlet>
                {/* Welcome text */}
                <div className='p-5 my-8 ml-3 text-2xl border-l-8 border-red-600 rounded-full carter-font'>Welcome to Language School <br /> <span className='flex items-center gap-3 text-base text-gray-400'><FaPeopleArrows></FaPeopleArrows> most popular foreign language platform ever the world.</span></div>
                <div data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <Banner></Banner>
                </div>
                <PopulerClasses></PopulerClasses>
                <PopularInstructors></PopularInstructors>
                <Schedule></Schedule>
            </div>
        );
    };

    export default Home;