import React from 'react';
import useAllInstructors from '../../hooks/useAllInstructors';
import InstructorCard from '../../components/InstructorCard';

const PopularInstructors = () => {
    const [instructors, loading, refetch] = useAllInstructors();
    const popularInstructors = instructors.filter((instructor) => instructor.totalStudents > 40);

    return (
        <div>
            <h3 className='py-8 my-4 text-3xl font-extrabold text-center text-black border rounded-md shadow-lg bg-base-200'>
                Popular Instructors <br /> <span className='text-xs text-yellow-700'>More than 40 students sorted</span> </h3>

            <div className='grid gap-3 mb-8 md:grid-cols-3'>
                {
                    popularInstructors.map((popularInstructor) => <InstructorCard
                    key={popularInstructor._id}
                    instructor={popularInstructor}
                    ></InstructorCard>
                )
                }
            </div>
        </div>
    );
};

export default PopularInstructors;