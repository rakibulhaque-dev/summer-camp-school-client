import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../../components/ClassCard';

const PopulerClasses = () => {
    const [classes, loading, refecth] = useClasses();
    const popularClasses = classes.filter((singleClass) => singleClass.totalStudents > 40);

    return (
        <div className='text-center'>
            <h3 className='py-8 my-4 text-3xl font-extrabold text-center text-black border rounded-md shadow-lg bg-base-200'>
                Popular Classes <br /> <span className='text-xs text-yellow-700'>More than 40 enrolled sorted</span> </h3>

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