import React, { useEffect } from 'react';
import useCartItems from '../hooks/useCartItems';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../src/index.css';
import { FaCartPlus, FaEye } from 'react-icons/fa';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ClassCard = ({ singleClass }) => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { availableSeats, otherClasses, subjectPic, totalStudents, _id, subjectName, courseFee, instructorName } = singleClass;
    const [cartItems, isLoading, refetch] = useCartItems();

    const navigate = useNavigate();
    const location = useLocation();

    const handleSelect = ({ singleClass }) => {
        if (user && (user.role === 'admin' || user.role === 'instructor')) {
            return; // Disable the select button for admin and instructor users
        }

        if (user) {
            const cartItem = { subjectId: _id, courseFee, instructorName, subjectName, subjectPic, email: user.email };
            console.log('Selected: ', cartItem)

            axiosSecure.post(`/cartitems/${user?.email}`, cartItem)
                .then(response => {
                    if (response.data.insertedId) {
                        refetch();
                        toast('Your class have been added!')
                    }
                })
                .catch(error => {
                    console.log(error.message)
                });
        } else {
            toast('You are not a student!', {
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
    }, []);

    const isButtonDisabled = user && (user.role === 'admin' || user.role === 'instructor');

    return (
        <>
            <div>
            <ToastContainer/>
            </div>
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
