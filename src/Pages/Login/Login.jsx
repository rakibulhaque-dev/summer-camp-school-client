import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import loginBanner from '../../../src/assets/banner/signUpImg.png';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { signIn, setUser } = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                const loggedUser = { email: result.user.email }
                
                fetch('http://localhost:5000/jwt',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log('Token from Login Page: ',data.token)
                    localStorage.setItem('access-token', data.token)
                    navigate(from, {replace:true})
                })
                


            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <Helmet>
                <title>Login | Language School</title>
            </Helmet>

            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <img className='rounded-lg ' src={loginBanner} alt="" />
                    </div>
                    <div className="max-w-sm shadow-2xl card md:w-1/2 bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <span className='font-bold text-center text-accent-focus'>Please Login</span>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input className="btn btn-accent" type="submit" value="Login" />
                            </div>
                        </form>
                        <div className='my-3 text-center'>
                            <p><small>New Here? <Link to="/reg">Create an account</Link> </small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;