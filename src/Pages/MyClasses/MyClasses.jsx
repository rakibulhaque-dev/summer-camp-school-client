import React from 'react';
import ClassCard from '../../components/ClassCard';
import { Helmet } from 'react-helmet-async';
import useClasses from '../../hooks/useClasses';
import { FaBookReader } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../src/index.css'

const MyClasses = () => {
    const [classes, loading, refetch] = useClasses();
    console.log(classes)


    return (
        <>
            <Helmet>
                <title>Classes | Language School</title>
            </Helmet>
            <div className='items-center justify-between p-10 ml-3 border-l-4 border-orange-600 md:flex'>
                <div>
                    <p className='flex items-center text-3xl text-orange-700 gap-9 '><FaBookReader></FaBookReader>
                        <span>Whats will you learn from here... <br /> <span className="text-xs">All the classes displayed, you can choose.</span> </span>  </p>

                </div>
                <div>
                    <div className="p-4 text-sm transition-transform duration-500 border-r-4 rounded-full shadow-md breadcrumbs carter-font hover:-translate-y-2">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link className="text-transparent bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text" to="/classes">
                                    Classes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

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