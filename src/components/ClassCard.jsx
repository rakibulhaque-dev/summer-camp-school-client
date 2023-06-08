import React from 'react';

const ClassCard = ({ singleClass }) => {
    console.log(singleClass)
    const { availableSeats, otherClasses, subjectPic, totalStudents, _id, subjectName, courseFee, instructorName } = singleClass;
    
    
    
    const handleSelect = (singleClass) => {
        console.log(singleClass)
    }
    
    return (
        <div className='items-center justify-center gap-4 text-center border rounded-md shadow-lg card'>
            <div className='card-body'>
                <img className='h-auto w-72' src={subjectPic} alt="" />
                <p className='font-bold text-primary'>Subject Name: <span className='font-extrabold'>{subjectName}</span></p>
                <p>Instructor Name:  <span className='font-extrabold'>{instructorName}</span></p>
            </div>
            <div className='my-4'>
                <p>Total Students: {totalStudents}</p>
                <p>Available Seats: {availableSeats}</p>
                <p className='font-bold text-yellow-600'>Fee: ${courseFee}</p>
                <button onClick={()=>handleSelect(singleClass)} className='mt-3 font-bold btn btn-primary btn-sm hover:bg-transparent' >Select</button>
            </div>
        </div>
    );
};

export default ClassCard;