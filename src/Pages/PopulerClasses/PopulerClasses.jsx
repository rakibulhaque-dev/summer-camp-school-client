import React from 'react';
import useClasses from '../../hooks/useClasses';
import ClassCard from '../../components/ClassCard';
import { FaPiedPiperAlt } from 'react-icons/fa';

const PopulerClasses = () => {
    const [classes, loading, refecth] = useClasses();
    const popularClasses = classes.filter((singleClass) => singleClass.totalStudents > 40);

    return (
        <div className='container mx-auto'>
            <div className='p-5 mt-20 mb-20 text-3xl'>
                <h3 className='p-3 ml-3 font-semibold border-l-8 border-red-600 shadow-lg'>
                    Populer Classes
                    <br />
                    <span className='flex items-center gap-3 text-xs font-kanit'><FaPiedPiperAlt></FaPiedPiperAlt> <span className='text-orange-700'>Here you find most of the students enrolled.</span></span>
                </h3>
            </div>

            <div className='grid grid-cols-2 gap-y-4 gap-x-4 md:grid-cols-3'>
                {popularClasses.map((singleClass) => <ClassCard
                    key={singleClass._id}
                    singleClass={singleClass}
                />)}
            </div>
        </div>
    );
};

export default PopulerClasses;