import React from 'react';
import logo from '../../../src/assets/logo.jpg';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaBookReader, FaDashcube, FaHome, FaShoppingBag, FaSun, FaUserAlt, FaUserShield } from 'react-icons/fa';
import useCartItems from '../../hooks/useCartItems';
import '../../../src/index.css'; 


const NavBar = ({ toggleMode, isDarkMode }) => {
    const { user, logOut } = useAuth();
    const [cartItems] = useCartItems();


    // console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li><Link to="/"> <FaHome></FaHome> HOME</Link></li>
        <li><NavLink to="/instructors"><FaUserShield></FaUserShield> INSTRUCTORS</NavLink></li>
        <li><Link to="/classes"><FaBookReader></FaBookReader> CLASSES</Link></li>
        <li><Link to="/dashboard"><FaDashcube></FaDashcube> DASHBOARD</Link></li>
        <li>
            <Link to="/dashboard/myclass">
                <FaShoppingBag className='text-yellow-700'></FaShoppingBag>
                <div className="p-2 border rounded-md badge badge-warning">+{cartItems?.length || 0}</div>
            </Link>
        </li>
        <li>
            {
                !user && <NavLink className='kanit-font' to="/login">LOGIN</NavLink>
            }
        </li>
    </>

    return (
        <div className='container py-4 mx-auto mb-6'>
            <div className="border rounded-md shadow-lg navbar bg-base-100 shadow-purple-200">
                <div className="navbar-start">
                    <div className="mr-3 dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <div className='flex items-center justify-center '>
                        <img className='w-16 p-3' src={logo} alt="" />
                        <a className="text-xl font-extrabold normal-case btn text-primary btn-ghost "></a>
                    </div>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="flex items-center justify-center gap-4 px-1 font-semibold kanit-font menu menu-horizontal">
                        {navOptions}
                        <button onClick={toggleMode} className='px-2 rounded-md hover:shadow-md hover:shadow-warning carter-font'>
                            <div className='flex items-center gap-1'>
                                <FaSun></FaSun>
                                <span>
                                    {isDarkMode ? 'Light' : 'Dark'}
                                </span>
                            </div>
                        </button>
                    </ul>
                </div>
                <div className="navbar-end me-8">
                    {
                        user &&
                        <div className='flex items-center gap-4 transition-transform duration-500 hover:-translate-y-2'>
                            {user?.photoURL ? <img src={user?.photoURL} alt="" className='w-6 h-6 rounded-full' /> : <FaUserAlt></FaUserAlt>}
                            <p className='text-xs carter-font'>{user?.displayName}</p>
                            <button onClick={handleLogOut} className='p-1 text-sm rounded-sm kanit-font btn-active btn-warning'>LOG OUT</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;