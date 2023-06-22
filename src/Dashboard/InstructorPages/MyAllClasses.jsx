import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import InstructorsClassCard from './InstructorsClassCard';

const MyClasses = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure();
    const [classes, setClasses] = useState([])

    useEffect(() => {
        axiosSecure.get(`/classes/${user?.email}`)
            .then((response) => {
                setClasses(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    console.log('MyClasses: ', classes)
    console.log('Im: ', user)

    return (
        <>
            <Helmet>
                <title>
                    My All Classes | Instructor
                </title>
            </Helmet>

            <div className='items-center justify-between w-full p-10 ml-3 border-l-8 border-orange-600 md:flex'>
                <div>
                    <p className='flex items-center text-3xl text-accent-focus gap-9 '>
                        <span>My All Classes Here <br /> <span className="text-xs"> </span> </span> </p>

                </div>
                <div>
                    <div className="p-4 text-sm transition-transform duration-500 border-r-4 rounded-full shadow-md breadcrumbs carter-font hover:-translate-y-2">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text" to="/classes">
                                    All My Classes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>


            <div className='grid w-full gap-6 mt-5 border rounded-lg md:grid-cols-2 p-7'>
                {
                    classes.map(item => <InstructorsClassCard
                    key={item._id}
                    item={item}
                    ></InstructorsClassCard>)
                }
            </div>
        </>
    );
};

export default MyClasses;