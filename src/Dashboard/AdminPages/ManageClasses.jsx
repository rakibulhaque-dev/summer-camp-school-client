import React from 'react';
import useClasses from '../../hooks/useClasses';
import ManageClassesCard from './ManageClassesCard';

const ManageClasses = () => {
    const [classes, loading, refetch] = useClasses();

    // Filter classes where status is 'pending'
    const pendingClasses = classes.filter(item => item.status === 'pending');
    console.log(pendingClasses)
    return (
        <div className='w-full'>
            {/* <h1>Manage Classes {pendingClasses.length}</h1> */}

            <div className='grid gap-5 md:grid-cols-2'>
                {
                    pendingClasses.map(item => <ManageClassesCard
                        key={item._id}
                        item={item}
                    ></ManageClassesCard>)
                }
            </div>
        </div>
    );
};

export default ManageClasses;
