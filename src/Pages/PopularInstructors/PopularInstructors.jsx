import React from 'react';
import useAllInstructors from '../../hooks/useAllInstructors';
import InstructorCard from '../../components/InstructorCard';
import { FaUserCheck } from 'react-icons/fa';

const PopularInstructors = () => {
    const [instructors, loading, refetch] = useAllInstructors();
    const popularInstructors = instructors.filter((instructor) => instructor.totalStudents > 40);

    return (
        <div>
            {/* <h3 className='py-8 my-4 text-3xl font-extrabold text-center text-black border rounded-md shadow-lg bg-base-200'>
                Popular Instructors <br /> <span className='text-xs text-yellow-700'>More than 40 students sorted</span> </h3>

            <div className='grid gap-3 mb-8 md:grid-cols-3'> */}
            <div className='p-5 mt-20 mb-20 text-3xl'>
                <h3 className='p-3 ml-3 font-semibold border-l-8 border-purple-600 shadow-lg'>
                    Populer Instructor
                    <br />
                    <span className='flex items-center gap-3 text-xs font-kanit'><FaUserCheck></FaUserCheck> <span className='text-orange-700'>Here you find most popular Instructos.</span></span>
                </h3>
            </div>
            <div className='grid grid-cols-2 gap-y-11 gap-x-4'>
                {
                    popularInstructors.map((popularInstructor) => <InstructorCard
                        key={popularInstructor._id}
                        instructor={popularInstructor}
                    ></InstructorCard>
                    )
                }
            </div>
        </div >
    );
};

export default PopularInstructors;