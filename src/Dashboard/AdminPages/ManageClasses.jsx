import React, { useEffect, useState } from 'react';
import ManageClassesCard from './ManageClassesCard';
import { FaCartArrowDown } from 'react-icons/fa';
import '../../../src/index.css';
import usePendingClasses from '../../hooks/usePendingClasses';

const ManageClasses = () => {
   const {pendingClasses, loading} = usePendingClasses()

    return (
        <div className='w-full'>
            <div className='transition-transform duration-500 hover:-translate-y-2'>
                <p className='p-6 mb-24 text-3xl font-bold border-l-8 border-orange-600 rounded-md shadow-lg carter-font text-amber-800'>
                    Admin Manage Classes <br /> <span className='flex items-center gap-3 text-sm border-t-2'><FaCartArrowDown></FaCartArrowDown> <span className='text-black'>Pending items: <span className='text-red-600'>{pendingClasses.length}</span> item</span></span> </p>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
                {pendingClasses.map(item => (
                    <ManageClassesCard key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default ManageClasses;