import React from 'react';
import { Helmet } from 'react-helmet-async';

const PaymentHistory = () => {
    return (
        <div className='w-full'>
            <p className='p-6 mb-24 text-3xl font-bold text-center border rounded-md shadow-lg text-warning'>My Enrolled Classes Here </p>
            <Helmet>
                <title>Payment History | LS</title>
            </Helmet>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Subject Name</th>
                            <th>Price $</th>
                            <th>Paid $ </th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>English</td>
                            <td>100$</td>
                            <td>$ </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;