import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../../components/ClassCard';

const MyClasses = () => {
    const [classes] = useClasses()
    return (
        <>
            <p className='text-center text-3xl font-bold text-primary border p-8 shadow-lg rounded'>Whats will you learn from here...</p>
            <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-4 mt-11'>
                {
                    classes.map(singleClass => <ClassCard
                        key={singleClass._id}
                        singleClass={singleClass}
                    ></ClassCard>)
                }
            </div>
        </>
    );
};

export default MyClasses;