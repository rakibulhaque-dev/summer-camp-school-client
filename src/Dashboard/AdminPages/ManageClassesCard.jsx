import React from 'react';
import { FaPrint, FaReadme, FaSearchDollar, FaUserCheck } from 'react-icons/fa';

const ManageClassesCard = ({ item }) => {
    const { courseFee, otherClasses, status, subjectName, subjectPic, totalStudents, instructorName } = item;
    return (
        <div className='p-5 border shadow-lg card'>
            <div className='flex justify-between p-8 border rounded-md shadow-lg bg-base-300 shadow-orange-500 card-title'>
                <p className='-m-4 font-bold rounded-full btn btn-warning btn-xs'><FaPrint></FaPrint> {status} now</p>
                <p className='-m-4 font-bold rounded-full btn btn-warning btn-xs'><FaSearchDollar></FaSearchDollar> Price: ${courseFee} USD</p>
            </div>
            <div className='text-lg font-bold card-body'>
                <img src={subjectPic} alt="" />
                <p className='flex items-center justify-around'> <span><FaUserCheck></FaUserCheck></span> Name of Instructor: <span className='text-yellow-700'>{instructorName} </span></p>
                <p className='flex items-center justify-around'> <span><FaReadme></FaReadme></span> Subject Name: <span className='text-red-600'>{subjectName}</span></p>
            </div>
            <div className='flex justify-between p-2 bg-black border rounded-md shadow-lg shadow-amber-400 card-actions card-title'>
                <button className='btn-success btn btn-sm hover:bg-yellow-500'>Approve</button>
                <button className='btn-error btn btn-sm hover:bg-white'>Deny</button>
            </div>
        </div>
    );
};

export default ManageClassesCard;