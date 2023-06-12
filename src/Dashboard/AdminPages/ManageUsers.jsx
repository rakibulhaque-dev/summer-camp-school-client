import React from 'react';
import useUsers from '../../hooks/useUsers';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageUsers = () => {

    const [users, loading, refetch] = useUsers();


    // UPDATE ADMIN
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    // UPDATE INSTRUCTOR
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user?._id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json' // Add the Content-Type header
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Instructor!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
    };


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
                            users?.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.role}</td>
                                <td className='mr-2'>

                                    {
                                        user?.role === 'admin' || user?.role === 'instructor' ?
                                            <>
                                                <button
                                                    disabled
                                                    className='font-bold btn-xs hover:btn-warning btn-accent btn'
                                                >
                                                    Make Admin
                                                </button>
                                                <button
                                                    disabled
                                                    className='btn-xs hover:btn-primary btn-success btn'
                                                >
                                                    Make Instructor
                                                </button>
                                            </>
                                            :
                                            <div>
                                                <button
                                                    onClick={() => handleMakeInstructor(user)}
                                                    className='btn-xs hover:btn-primary btn-success btn'
                                                >
                                                    Make Instructor
                                                </button>
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className='font-bold btn-xs hover:btn-warning btn-accent btn'
                                                >
                                                    Make Admin
                                                </button>
                                            </div>
                                    }

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