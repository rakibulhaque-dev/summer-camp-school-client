import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaCoins, FaHome, FaListUl, FaPenFancy, FaReadme, FaUserPlus, FaUsers } from "react-icons/fa";
import useInstructor from '../hooks/useInstructor';
import { Helmet } from 'react-helmet-async';
import NavBar from '../Shared/NavBar/NavBar';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
const Dashboard = () => {
    const { user } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    console.log('Dashboard IsAdmin: ', isAdmin);
    const [isInstructor, isInstructorLoading] = useInstructor();
    console.log('Dashboard isInstructor: ', isInstructor);

    const studentsLinks = (
        <>
            <li><NavLink to='/dashboard/myclass'><FaListUl /> My Selected Classes</NavLink></li>
            <li><NavLink to='/dashboard/enrolled'><FaReadme /> My Enrolled Classes</NavLink></li>
            <li><NavLink to='/dashboard/paymenthistory'><FaCoins /> Payment History</NavLink></li>
        </>
    );

    const instructorLinks = (
        <>
            <li><NavLink to='/dashboard/addnewclass'><FaPenFancy /> Add a Class</NavLink></li>
            <li><NavLink to='/dashboard/myallclasses'><FaReadme /> My All Classes</NavLink></li>
            <li><NavLink to='/dashboard/enrolledstudents'><FaUsers /> Enrolled Students</NavLink></li>
        </>
    );

    const adminLinks = (
        <>
            <li><NavLink to='/dashboard/admin/manageclasses'><FaReadme /> Manage Classes</NavLink></li>
            <li><NavLink to='/dashboard/admin/manageusers'><FaUserPlus /> Manage Users</NavLink></li>
        </>
    );

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Dashboard || LS</title>
            </Helmet>
            <NavBar />

            <div className="mb-8 drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="flex flex-col items-center justify-center drawer-content">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="h-full p-4 menu w-80 bg-base-200 text-base-content">
                        {isAdmin || user?.role === 'admin' ? adminLinks : ''}
                        {(isInstructor || user?.role === 'instructor') && instructorLinks}
                        {!isAdmin && !isInstructor && studentsLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
