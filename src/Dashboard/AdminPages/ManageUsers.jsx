import React from 'react';
import useUsers from '../../hooks/useUsers';
import { Helmet } from 'react-helmet-async';
import { FaCartArrowDown, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUsers = () => {

    const [users, loading, refetch] = useUsers();
    console.log(users)

    const [axiosSecure] = useAxiosSecure()

    // UPDATE ADMIN
    const handleMakeAdmin = user => {
        axiosSecure.patch(`https://language-school-server-ten.vercel.app/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Admin!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // Handle error
            });
    };


    // UPDATE INSTRUCTOR
    const handleMakeInstructor = user => {
        axiosSecure.patch(`https://language-school-server-ten.vercel.app/users/instructor/${user?._id}`, {
            headers: {
                'Content-Type': 'application/json' // Add the Content-Type header
            }
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is now Instructor!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => {
                // Handle error
            });
    };



    return (
        <div className='w-full'>

            <Helmet>
                <title>Manage Users | Language School</title>
            </Helmet>

            <div className='transition-transform duration-500 hover:-translate-y-2'>
                <p className='p-6 mb-24 text-3xl font-bold border-l-8 border-orange-600 rounded-md shadow-lg carter-font text-amber-800'>
                    Manage Users <br /> <span className='flex items-center gap-3 text-sm border-t-2'><FaCartArrowDown></FaCartArrowDown> <span className='text-black'> <span className='text-red-600'>: {users.length} People</span> </span></span> </p>
            </div>

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