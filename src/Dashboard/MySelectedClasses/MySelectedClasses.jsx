import React from 'react';
import useCartItems from '../../hooks/useCartItems';
import { Helmet } from 'react-helmet-async';
import { FaCartArrowDown, FaTrashAlt } from 'react-icons/fa';
import '../../../src/index.css'
import { Link } from 'react-router-dom';

const MySelectedClasses = () => {
    const [cartItems, isLoading, refetch] = useCartItems()
    console.log('My Cart Items: ', cartItems)




    return (
        <div className='w-full'>
            <div className='transition-transform duration-500 hover:-translate-y-2'>
                <p className='p-6 mb-24 text-3xl font-bold text-orange-500 border-l-8 border-orange-600 rounded-md shadow-lg carter-font'>
                    My Selected Classes <br /> <span className='flex items-center gap-3 text-sm border-t-2'><FaCartArrowDown></FaCartArrowDown> <span className='text-black'>Total cart items: <span className='text-red-600'>{cartItems.length}</span> item</span></span> </p>
            </div>

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
                            <th>Buy</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cartItems?.map((carts, index) => <tr
                                key={carts._id}
                                className='transition-transform duration-500 hover:-translate-y-2'>
                                <th>{index + 1}</th>
                                <td>{carts.subjectName}</td>
                                <td>{carts.instructorName}</td>
                                <td>$ {carts.courseFee}</td>
                                <td>
                                    <Link to='/dashboard/payment'>
                                        <button className='p-2 px-4 text-red-500 shadow-lg hover:bg-accent-focus'>
                                            BUY
                                        </button>
                                    </Link>
                                </td>
                                <td>
                                    <button className='p-2 text-red-500 rounded-full shadow-lg hover:bg-accent-focus'>
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;