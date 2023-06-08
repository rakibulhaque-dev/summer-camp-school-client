import React from 'react';
import useUsers from '../../hooks/useUsers';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const ManageUsers = () => {
    const [users]  = useUsers();
    console.log(users)
    return (
        <div className='w-full'>

            <Helmet>
                <title>Manage Users | Language School</title>
            </Helmet>
    
            <div className="w-full overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Action</th>
                            <th>Delete Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td>
                                    <div className='flex gap-3'>
                                        <button className='font-bold btn-xs hover:btn-warning btn-accent btn'>Make Admin</button>
                                        <button className='btn-xs hover:btn-primary btn-success btn'>Make Instructor</button>
                                    </div>
                                </td>
                                <td><button 
                                className='p-2 text-red-500 rounded-full shadow-lg hover:bg-accent-focus'
                                ><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;