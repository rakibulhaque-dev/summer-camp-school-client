import React from 'react';
import useCartItems from '../hooks/useCartItems';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ClassCard = ({ singleClass }) => {
    // console.log(singleClass)
    const {user} = useAuth();
    const { availableSeats, otherClasses, subjectPic, totalStudents, _id, subjectName, courseFee, instructorName } = singleClass;
    const [cartItems, isLoading, refetch] = useCartItems();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = (singleClass) => {
        // console.log(singleClass)

        if (user && user.email) {
            const cartItem = { subjectId: _id, courseFee, instructorName, subjectName, subjectPic, email: user.email }
            fetch('http://localhost:5000/cartitems', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Selected your subject succesfully!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the Classes!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
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
                <button onClick={() => handleSelect(singleClass)} className='mt-3 font-bold btn btn-primary btn-sm hover:bg-transparent' >Select</button>
            </div>
        </div>
    );
};

export default ClassCard;