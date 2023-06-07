import React from 'react';
import useInstructors from '../../hooks/useInstructors';
import InstructorCard from '../../components/InstructorCard';

const Instructors = () => {
    const [instructors] = useInstructors()
    console.log(instructors)
    return (
        <>
            <h3 className='text-center text-3xl border-primary mb-8 font-bold text-primary p-8 rounded-lg shadow-lg'>We'are all Instructors: {instructors.length}</h3>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 mb-12 gap-4'>
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