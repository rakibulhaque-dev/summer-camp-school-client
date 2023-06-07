import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCoins, FaListUl, FaMobileAlt, FaPenFancy, FaReadme, FaUserPlus, FaUsers } from "react-icons/fa";
const Dashboard = () => {

    const isInstructor = true;
    const isAdmin = true;
    const studentsLinks = <>
        <li><NavLink to='/dashboard/myclass'><FaListUl></FaListUl> My Selected Classes</NavLink></li>
        <li><NavLink to='/dashboard/enrolled'><FaReadme></FaReadme> My Enrolled Classes</NavLink></li>
        <li><NavLink to='/dashboard/paymenthistory'><FaCoins></FaCoins> Payment History</NavLink></li>
    </>
    const instructorLinks = <>
        <li><NavLink to='/dashboard/addclass'><FaPenFancy></FaPenFancy> Add a Class</NavLink></li>
        <li><NavLink to='/dashboard/myallclasses'><FaReadme></FaReadme> My Classes</NavLink></li>
        <li><NavLink to='/dashboard/enrolledstudents'><FaUsers></FaUsers> Enrolled Students</NavLink></li>
    </>
    const adminLinks = <>
        <li><NavLink to='/dashboard/paymenthistory'><FaReadme></FaReadme> Manage Classes</NavLink></li>
        <li><NavLink to='/dashboard/manageusers'><FaUserPlus></FaUserPlus> Manage Users</NavLink></li>
    </>
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col items-center justify-center drawer-content">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
                    {/* Sidebar content here */}

                    {isInstructor && instructorLinks}
                    {isAdmin && adminLinks}
                    {!isAdmin && !isInstructor && studentsLinks}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;