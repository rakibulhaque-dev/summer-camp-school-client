import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const AddNewClasses = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = (data) => {
        axiosSecure.post('/classes', data)
            .then((response) => {
                // Handle successful submission
                console.log(response.data);
            })
            .catch((error) => {
                // Handle error
                console.error(error);
            });
    };

    return (
        <div className='w-full'>
            <Helmet>
                <title>Add New Class | LangSchool</title>
            </Helmet>

            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <span className='p-3 mb-8 text-3xl font-bold text-center text-black border shadow-md'>Request to Add a class</span>

                {/* Instructor Name */}
                <div className='flex gap-2'>
                    <div className="w-1/2 form-control">
                        <input
                            type="text"
                            name="instructorName"
                            placeholder="Instructor Name Here"
                            className="input input-bordered"
                            {...register('instructorName', { required: true })}
                        />
                        {errors.instructorName && <span className="text-red-500">Instructor name is required</span>}
                    </div>

                    {/* Instructor Email */}
                    <div className="w-1/2 form-control">
                        <input
                            type="email"
                            name="email"
                            placeholder="Instructor Email"
                            className="input input-bordered"
                            {...register('email', { required: true })}
                        />
                        {errors.email && <span className="text-red-500">Instructor email is required</span>}
                    </div>
                </div>

                {/* Subject Name */}
                <div className="form-control">
                    <input
                        type="text"
                        name="subjectName"
                        placeholder="Subject Name Here"
                        className="input input-bordered"
                        {...register('subjectName', { required: true })}
                    />
                    {errors.subjectName && <span className="text-red-500">Subject name is required</span>}
                </div>

                {/* Subject Pic */}
                <div className="form-control">
                    <input
                        type="text"
                        name="subjectPic"
                        placeholder="Subject Pic Link Here"
                        className="input input-bordered"
                        {...register('subjectPic', { required: true })}
                    />
                    {errors.subjectPic && <span className="text-red-500">Subject pic link is required</span>}
                </div>

                {/* Available Seats and Course Fee */}
                <div className="flex gap-2">
                    <div className="w-1/2 form-control">
                        <input
                            type="number"
                            name="availableSeats"
                            placeholder="Available Seats No:"
                            className="input input-bordered"
                            {...register('availableSeats', { required: true })}
                        />
                        {errors.availableSeats && <span className="text-red-500">Available seats is required</span>}
                    </div>
                    <div className="w-1/2 form-control">
                        <input
                            type="number"
                            name="courseFee"
                            placeholder="Course Fee"
                            className="input input-bordered"
                            {...register('courseFee', { required: true })}
                        />
                        {errors.courseFee && <span className="text-red-500">Course fee is required</span>}
                    </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 form-control">
                    <input className="btn btn-accent" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddNewClasses;
