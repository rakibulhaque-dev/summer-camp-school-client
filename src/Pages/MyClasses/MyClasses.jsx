import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../../components/ClassCard';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    const [classes, loading, refetch] = useClasses();
    return (
        <>
            <Helmet>
                <title>Classes | Language School</title>
            </Helmet>
            <p className='p-8 text-3xl font-bold text-center border rounded shadow-lg text-primary'>Whats will you learn from here...</p>
            <div className='grid gap-4 md:grid-cols-3 lg:grid-cols-3 mt-11'>
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