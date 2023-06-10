import React from 'react';
import { Helmet } from 'react-helmet-async';

const AddNewClasses = () => {


    const handleAddClass = event => {
        event.preventDefault();

        const form = event.target;
        const instructorName = form.instructorName.value;
        const subjectName = form.subjectName.value;
        const subjectPic = form.subjectPic.value;
        const availableSeats = form.availableSeats.value;
        const courseFee = form.courseFee.value;

        const newClassObject = {
            instructorName,
            subjectName,
            subjectPic,
            availableSeats,
            courseFee,
            status: 'pending',
            feedback: '',
        }

        console.log(newClassObject)
    }
    return (
        <div className='w-full'>

            <Helmet>
                <title>Add New Class | LangSchool</title>
            </Helmet>

            <form onSubmit={handleAddClass} className="card-body">
                <span className='p-3 mb-8 text-3xl font-bold text-center text-black border shadow-md'>Request to Add a class</span>
                {/* FIELDS */}
                <div className='flex gap-2'>
                    <div className="w-1/2 form-control">
                        <input type="text" name="instructorName" placeholder="Instructor Name Here" className="input input-bordered" />
                    </div>
                    <div className="w-1/2 form-control">
                        <input type="email" name="email" placeholder="Instructor Email" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <input type="text" name="subjectName" placeholder="Subject Name Here" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <input type="text" name="subjectPic" placeholder="Subject Pic Link Here" className="input input-bordered" />
                </div>
                <div className="flex gap-2">
                    <div className="w-1/2 form-control">
                        <input type="number" name="availableSeats" placeholder="Available Seats No:" className="input input-bordered" />
                    </div>
                    <div className="w-1/2 form-control">
                        <input type="number" name="courseFee" placeholder="Course Fee" className="input input-bordered" />
                    </div>

                </div>
                {/* BTN  */}
                <div className="mt-6 form-control">
                    <input className="btn btn-accent" type="submit" value="Add Class" />
                </div>
            </form>
        </div>
    );
};

export default AddNewClasses;