import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container flex p-6 mx-auto bg-blue-300 shadow-lg'>
            <ul className='flex justify-between gap-4 font-bold'>
                <NavLink to='/instructors'>Instructors</NavLink>
                <NavLink>My Classes</NavLink>
                <NavLink>Dashboard</NavLink>
            </ul>
        </div>
    );
};

export default NavBar;