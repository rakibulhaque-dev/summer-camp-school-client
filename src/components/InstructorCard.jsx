import React from 'react';

const InstructorCard = ({ instructor }) => {
    // console.log(instructor)
    const { photoURL, instructorName, totalClasses, _id, email } = instructor;
    return (
        <div className='container items-center justify-center mx-auto border shadow-lg card'>
            <div className='card-body '>
                <img className='h-auto rounded-lg w-96' src={photoURL} alt="" />
            </div>
            <div className='my-3 text-center'>
                <p>Name: {instructorName} </p>
                <p>Email: {email} </p>
                <p>Total Classes: {totalClasses} </p>
                <p className='btn btn-sm hover:bg-transparent btn-secondary'>See classes</p>
            </div>
        </div>
    );
};

export default InstructorCard;