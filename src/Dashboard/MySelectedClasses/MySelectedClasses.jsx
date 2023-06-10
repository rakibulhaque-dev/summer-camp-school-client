import React from 'react';
import useCartItems from '../../hooks/useCartItems';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';

const MySelectedClasses = () => {
    const [cartItems, isLoading, refetch] = useCartItems()
    return (
        <div className='w-full'>
            <p className='p-6 mb-24 text-3xl font-bold text-center border rounded-md shadow-lg text-secondary-focus'>My Selected Classes Here: {cartItems.length}</p>

            <Helmet>
                <title>Selected Classes | Cart | LS</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartItems?.map((carts, index) => <tr key={carts._id}>
                                <th>{index + 1}</th>
                                <td>{carts.subjectName}</td>
                                <td>{carts.instructorName}</td>
                                <td>$ {carts.courseFee}</td>
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

export default MySelectedClasses;