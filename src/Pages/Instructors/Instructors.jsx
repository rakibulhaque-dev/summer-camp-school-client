import React from 'react';
import InstructorCard from '../../components/InstructorCard';
import { Helmet } from 'react-helmet-async';
import useAllInstructors from '../../hooks/useAllInstructors';

const Instructors = () => {
    const [instructors] = useAllInstructors()
    
    return (
        <>
            <Helmet>
                <title>Instructors | Language School</title>
            </Helmet>
            <h3 className='p-8 mb-8 text-3xl font-bold text-center rounded-lg shadow-lg border-primary text-primary'>We'are all Instructors: {instructors.length}</h3>
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