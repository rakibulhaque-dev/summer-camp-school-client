import React from 'react';

const ClassCard = ({ singleClass }) => {
    console.log(singleClass)
    const { availableSeats, otherClasses, subjectPic, totalStudents, _id, subjectName, courseFee, instructorName } = singleClass;
    
    
    
    const handleSelect = (id) => {
        console.log(id)
    }
    
    return (
        <div className='text-center card justify-center items-center border rounded-md shadow-lg gap-4'>
            <div className='card-body'>
                <img className='h-auto w-72' src={subjectPic} alt="" />
                <p className='font-bold text-primary'>Subject Name: <span className='font-extrabold'>{subjectName}</span></p>
                <p>Instructor Name:  <span className='font-extrabold'>{instructorName}</span></p>
            </div>
            <div className='my-4'>
                <p>Total Students: {totalStudents}</p>
                <p>Available Seats: {availableSeats}</p>
                <p className='text-yellow-600 font-bold'>Fee: ${courseFee}</p>
                <button className='font-bold btn btn-primary btn-sm mt-3 hover:bg-transparent' onClick={()=>handleSelect(_id)}>Select</button>
            </div>
        </div>
    );
};

export default ClassCard;