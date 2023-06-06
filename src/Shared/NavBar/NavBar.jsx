import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Link to='/instructors'>Instructors</Link>
            <Link>My Classes</Link>
            <Link>Dashboard</Link>
        </div>
    );
};

export default NavBar;