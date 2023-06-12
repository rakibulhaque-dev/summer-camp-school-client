import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ManageClassesCard from './ManageClassesCard';
import { FaCartArrowDown } from 'react-icons/fa';
import '../../../src/index.css';

const ManageClasses = () => {
    const [pendingClasses, setPendingClasses] = useState([]);

    useEffect(() => {
        fetchPendingClasses();
    }, []);

    const fetchPendingClasses = async () => {
        try {
            const response = await axios.get('/classes');
            const classes = response.data.filter(item => item.status === 'pending');
            setPendingClasses(classes);
        } catch (error) {
            console.error('Error fetching pending classes:', error);
        }
    };

    return (
        <div className='w-full'>
            <div className='transition-transform duration-500 hover:-translate-y-2'>
                <p className='p-6 mb-24 text-3xl font-bold border-l-8 border-orange-600 rounded-md shadow-lg carter-font text-amber-800'>
                    My Selected Classes <br /> <span className='flex items-center gap-3 text-sm border-t-2'><FaCartArrowDown></FaCartArrowDown> <span className='text-black'>Pending items: <span className='text-red-600'>{pendingClasses.length}</span> item</span></span> </p>
            </div>

            <div className='grid gap-5 md:grid-cols-2'>
                {pendingClasses.map(item => (
                    <ManageClassesCard key={item._id} item={item} fetchPendingClasses={fetchPendingClasses} />
                ))}
            </div>
        </div>
    );
};

export default ManageClasses;