import React from 'react';
import { FaCartArrowDown, FaChair, FaDollarSign, FaMailBulk, FaStamp, FaTrashAlt, FaUserAlt } from 'react-icons/fa';
import '../../../src/index.css'


const InstructorsClassCard = ({ item }) => {
    console.log(item)
    const { instructorName, status, availableSeats, courseFee, email, subjectPic, _id } = item
    return (
        <div className='p-3 text-center border kanit-font card'>
            <div className='card-body'>
                <img className='rounded-lg' src={subjectPic} alt="" />
            </div>
            <p className='flex items-center justify-center gap-3'>
                <FaUserAlt className='text-purple-600'></FaUserAlt>
                <span>Name: {instructorName}</span>
            </p>
            <p className='flex items-center justify-center gap-3'>
                <FaMailBulk className='text-purple-600'></FaMailBulk>
                <span>Name: {email}</span>
            </p>
            <p className='flex items-center justify-center gap-3'>
                <FaStamp className='text-purple-600'></FaStamp>
                <span> Status: {status}</span>
            </p>
            <p className='flex items-center justify-center gap-3'>
                <FaChair className='text-purple-600'></FaChair>
                <span>Seats: {availableSeats}</span>
            </p>
            <p className='flex items-center justify-center gap-3'>
                <FaDollarSign className='text-purple-600'></FaDollarSign>
                <span> Fee: {courseFee}</span>
            </p>
        </div>
    );
};

export default InstructorsClassCard;