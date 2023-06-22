import React from 'react';
import InstructorCard from '../../components/InstructorCard';
import { Helmet } from 'react-helmet-async';
import useAllInstructors from '../../hooks/useAllInstructors';
import { FaAd, FaBookReader, FaUserFriends, FaUserShield, FaUsersSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Instructors = () => {
    const [instructors] = useAllInstructors()
    console.log(instructors)

    return (
        <>
            <Helmet>
                <title>Instructors | Language School</title>
            </Helmet>
            <div className='items-center justify-between p-10 ml-3 border-l-4 border-orange-600 md:flex'>
                <div>
                    <p className='flex items-center text-3xl text-orange-700 gap-9 '><FaUserShield></FaUserShield>
                        <span>All our verified instructor here... <br /> <span className="text-xs">All the istructors displayed, you can follow..</span> </span>  </p>

                </div>
                <div>
                    <div className="p-4 text-sm transition-transform duration-500 border-r-4 rounded-full shadow-md breadcrumbs carter-font hover:-translate-y-2">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text" to="/instructors">
                                    Instructors
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <div className='grid gap-4 mb-12 md:grid-cols-3 lg:grid-cols-3'>
                {
                    instructors.map(instructor => <InstructorCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorCard>)
                }
            </div>
        </>
    );
};

export default Instructors;