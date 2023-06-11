import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/index.css';

const InstructorCard = ({ instructor }) => {
    // console.log(instructor)
    const { photoURL, instructorName, totalClasses, _id, email } = instructor;


    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className='container items-center justify-center mx-auto border shadow-lg card ' data-aos="flip-down">
            <div className='transition-all duration-300 transform card-body hover:scale-105'>
                <img className='h-auto rounded-lg w-96' src={photoURL} alt="" />
            </div>
            <div className='my-3 text-center kanit-font'>
                <p>Name: {instructorName} </p>
                <p>Email: {email} </p>
                <p>Total Classes: {totalClasses} </p>
                <p className='btn btn-sm hover:bg-transparent btn-secondary'>See classes</p>
            </div>
        </div>
    );
};

export default InstructorCard;