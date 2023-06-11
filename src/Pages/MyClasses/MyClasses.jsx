import React from 'react';
import ClassCard from '../../components/ClassCard';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';
import { FaBookReader } from 'react-icons/fa';


const MyClasses = () => {
    const [classes, loading, refetch] = useClasses();
    console.log(classes)


    return (
        <>
            <Helmet>
                <title>Classes | Language School</title>
            </Helmet>
            <div className='p-10 ml-3 border-l-4 border-orange-600'>
                <p className='flex items-center text-3xl text-orange-700 gap-9 '><FaBookReader></FaBookReader> 
                    <span>Whats will you learn from here... <br /> <span className="text-xs">All the classes displayed, you can choose.</span> </span>  </p>
            </div>
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