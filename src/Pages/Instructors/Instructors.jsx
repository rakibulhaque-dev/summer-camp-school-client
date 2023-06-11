import React from 'react';
import InstructorCard from '../../components/InstructorCard';
import { Helmet } from 'react-helmet-async';
import useAllInstructors from '../../hooks/useAllInstructors';
import { FaAd, FaUserFriends } from 'react-icons/fa';

const Instructors = () => {
    const [instructors] = useAllInstructors()

    return (
        <>
            <Helmet>
                <title>Instructors | Language School</title>
            </Helmet>
            <h3 className='flex items-center gap-3 p-8 mb-8 text-3xl font-bold text-center text-black border-l-8 border-orange-700 rounded-lg shadow-lg'><FaUserFriends></FaUserFriends> <span>We'are all Instructors: <span className='text-red-600'>{instructors.length} </span>of numbers! <br />
            </span>
                <span className='text-xs'>
                    You can see classes and enroll...
                </span>
            </h3>

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