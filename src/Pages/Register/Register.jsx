import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import signUpImg from '../../../src/assets/banner/signUpImg.png';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';


const Register = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = data => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              displayName: data.name,
              email: data.email,
              photoURL: data.photoURL,
              role: "student",
              address: data.address,
              phoneNumber: data.phoneNumber,
            }
            fetch('http://localhost:5000/users', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Yay! You are registered as a student!.',
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/');
                }
              })
          })
          .catch(error => console.log(error))
      })
  };


  return (
    <>
      <Helmet>
        <title>Sign Up | Language School</title>
      </Helmet>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
            <img src={signUpImg} alt="" className='rounded-lg' />
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-600">Name is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <span className="text-red-600">Email is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 16,
                  pattern: /(?=.*[0-9])(?=.*[a-z])/
                })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                {errors.password?.type === 'minLength' && <p className="text-red-600">Should be 6 character length!</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-600">Must be less than 16 characters</p>}
                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one lowercase, and one numeric value</p>}
  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Gender</span>
                </label>
                <select {...register("gender")} className="w-full max-w-xs select select-bordered">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input type="tel" {...register("phoneNumber", { required: true })} placeholder="Phone Number " className="input input-bordered" />
                {errors.phoneNumber && <span className="text-red-600">Phone Number is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input type="tel" {...register("address", { required: true })} placeholder="Address" className="input input-bordered" />
              </div>
              <div className="mt-4 form-control">
                <input className="shadow-lg btn btn-accent" type="submit" value="Sign Up" />
              </div>
            </form>
            <div className='my-6 text-center'>
              <p><small>Already have an account? <Link to="/login" className='text-accent'>Login now</Link></small></p>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Register;      