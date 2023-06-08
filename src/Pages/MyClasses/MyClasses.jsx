import React from 'react';
import ClassCard from '../../components/ClassCard';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';

const MyClasses = () => {
    const [classes, loading, refetch] = useClasses();
    console.log(classes)
    return (
        <>
            <Helmet>
                <title>Classes | Language School</title>
            </Helmet>
            <p className='p-8 text-3xl font-bold text-center border rounded shadow-lg text-primary'>
                Whats will you learn from here...</p>
            <div className='grid gap-4 mb-12 md:grid-cols-3 lg:grid-cols-3 mt-11'>
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