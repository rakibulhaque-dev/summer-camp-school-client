import React from 'react';
import useAuth from './hooks/useAuth';
import '../src/index.css';
import { Helmet } from 'react-helmet-async';
import { FaUser } from 'react-icons/fa';

const UserProfile = () => {
    const { user } = useAuth();
    console.log(user);

    return (
        <div className='min-h-screen bg-gray-100'>
            <Helmet>
                <title>My Profile | Language School</title>
            </Helmet>
            <div className='w-full min-h-screen py-8'>
                <div className='max-w-3xl mx-auto bg-white rounded-lg shadow-lg'>
                    <div className='bg-blue-500'>
                        <div className='h-48 bg-gray-200'></div>
                    </div>
                    <div className='flex items-center justify-between p-4'>
                        <div className='flex items-center'>
                            <div className='p-2 bg-gray-200 rounded-full'>
                                <img className='rounded-full' src={user?.photoURL} alt="" />
                            </div>
                            <h1 className='ml-4 text-2xl font-semibold text-gray-800'>{user?.displayName}</h1>
                        </div>
                        <button className='text-blue-500 hover:text-blue-600'>
                            <FaUser className='text-xl' />
                        </button>
                    </div>
                    <div className='p-6'>
                        <div className='mb-6'>
                            <label className='block mb-1 font-medium text-gray-700'>Username:</label>
                            <p className='text-gray-800'>{user?.displayName}</p>
                        <div className='mb-6'>
                            <label className='block mb-1 font-medium text-gray-700'>Bio:</label>
                            <p className='text-gray-800'>{user?.bio}</p>
                        </div>
                        <div className='mb-6'>
                            <label className='block mb-1 font-medium text-gray-700'>Location:</label>
                            <p className='text-gray-800'>{user?.address}</p>
                        </div>
                        <div className='mb-6'>
                            <label className='block mb-1 font-medium text-gray-700'>Email:</label>
                            <p className='text-gray-800'>{user?.email}</p>
                        </div>
                        </div>
                        <button className='px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600'>
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
