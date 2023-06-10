import React from 'react';
import { FaPrint, FaReadme, FaSearchDollar, FaUserCheck } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ManageClassesCard = ({ item, refetch }) => {
    const { courseFee, otherClasses, status, subjectName, subjectPic, totalStudents, instructorName } = item;


    const handleApprove = (item) => {
        console.log(item)

        fetch(`http://localhost:5000/classes/${item._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Approved Class!`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }



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
                <button onClick={() => handleApprove(item)} className='btn-success btn btn-sm hover:bg-yellow-500'>Approve</button>
                <button className='btn-error btn btn-sm hover:bg-white'>Deny</button>
            </div>
        </div>
    );
};

export default ManageClassesCard;