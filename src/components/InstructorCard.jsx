import React from 'react';

const InstructorCard = ({ instructor }) => {
    console.log(instructor)
    const { photoURL, instructorName, totalClasses, _id, email } = instructor;
    return (
        <div className='card border items-center mx-auto container justify-center shadow-lg'>
            <div className='card-body '>
                <img className='h-auto w-96 rounded-lg' src={photoURL} alt="" />
            </div>
            <div className='text-center my-3'>
                <p>Name: {instructorName} </p>
                <p>Email: {email} </p>
                <p>Total Classes: {totalClasses} </p>
                <p className='btn btn-sm hover:bg-transparent btn-secondary'>See classes</p>
            </div>
        </div>
    );
};

export default InstructorCard;