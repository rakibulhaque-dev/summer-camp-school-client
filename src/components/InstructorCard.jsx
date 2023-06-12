import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaCheckCircle, FaDatabase, FaEye, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const InstructorCard = ({ instructor }) => {
    // console.log(instructor)
    const { photoURL, instructorName, totalClasses, _id, email } = instructor;


    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container items-center justify-center mx-auto border shadow-lg card ' data-aos="flip-down">
            <p className='absolute top-0 right-0 flex items-center gap-2 px-1 -mt-3 text-lg border-t-2 rounded-l-lg shadow-md shadow-warning bg-base'><FaCheckCircle className='text-blue-500'></FaCheckCircle> <span className='kanit-font'>Verified</span>
            </p>
            <div className='transition-all duration-300 transform card-body hover:scale-105'>
                <img className='h-auto rounded-lg w-96' src={photoURL} alt="" />
            </div>
            <div className='my-6 text-center kanit-font '>
                <p>Name: {instructorName} </p>
                <p>Email: {email} </p>
                <p>Total Classes: {totalClasses} </p>
                <div className='flex items-center gap-4'>
                    <Link className='btn btn-sm hover:text-white btn-outline btn-active'><FaBookOpen className='text-red-500'></FaBookOpen> See classes</Link>
                    <button className='btn btn-sm hover:text-white btn-outline'><FaUserPlus className='text-blue-500'></FaUserPlus> Follow</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;