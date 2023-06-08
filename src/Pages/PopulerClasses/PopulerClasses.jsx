import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../../components/ClassCard';

const PopulerClasses = () => {
    const [classes, loading, refecth] = useClasses();
    const popularClasses = classes.filter((singleClass) => singleClass.totalStudents > 40);

    return (
        <div className='text-center'>
            <h3 className='py-8 my-4 text-3xl font-extrabold text-center border rounded-md shadow-lg text-accent'>Popular Classes </h3>

            <div className='grid gap-4 md:grid-cols-3'>
                {popularClasses.map((singleClass) => <ClassCard
                    key={singleClass._id}
                    singleClass={singleClass}
                />)}
            </div>
        </div>
    );
};

export default PopulerClasses;