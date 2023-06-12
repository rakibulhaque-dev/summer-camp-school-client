import React, { useEffect } from 'react';
import useCartItems from '../hooks/useCartItems';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/index.css'
import { FaCartPlus, FaEye } from 'react-icons/fa';
import { toast } from 'react-toastify';

const ClassCard = ({ singleClass }) => {
    const { user } = useAuth();
    const { availableSeats, otherClasses, subjectPic, totalStudents, _id, subjectName, courseFee, instructorName } = singleClass;
    const [cartItems, isLoading, refetch] = useCartItems();
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = () => {
        if (user) {
            if (user.role === 'admin' || user.role === 'instructor') {
                return; // Disable the select button and prevent the fetch request for admin and instructor
            }

            // Rest of the code for regular users
            const cartItem = { subjectId: _id, courseFee, instructorName, subjectName, subjectPic, email: user.email };
            fetch('https://language-school-server-ten.vercel.app/cartitems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
                            title: 'Selected your subject successfully!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } else {
            toast('Youre not a student!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    useEffect(() => {
        AOS.init();
    }, [])

    const isButtonDisabled = user && (user.role === 'admin' || user.role === 'instructor');

    return (



        <>
            <div className='items-center justify-center gap-4 mb-6 text-center border rounded-md shadow-lg card kanit-font' data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">

                <div className='pb-0 mb-0 card-body'>
                    <p className='absolute top-0 right-0 flex items-center gap-2 p-2 -mt-8 text-lg rounded-l-lg shadow-lg carter-font shadow-black bg-warning'><FaEye />Most Viewed</p>
                    <img className='w-full transition-all duration-300 transform h-3/4/4 hover:scale-105' src={subjectPic} alt="" />
                </div>
                <div className='my-2'>
                    <p className='font-bold text-orange-950'>Subject Name: <span className='font-extrabold carter-font'>{subjectName}</span></p>
                    <p>Instructor Name:  <span className='font-extrabold'>{instructorName}</span></p>
                    <p>Total Students: {totalStudents}</p>
                    <p>Available Seats: {availableSeats}</p>
                    <p className='font-bold text-yellow-600'>Fee: ${courseFee}</p>
                    <button
                        onClick={() => handleSelect(singleClass)}
                        className='mt-3 font-bold btn btn-success btn-sm hover:bg-transparent'
                        disabled={isButtonDisabled}
                    >
                        <FaCartPlus /> Select
                    </button>
                </div>
            </div>
        </>
    );
};

export default ClassCard;
