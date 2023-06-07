import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signIn, setUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';


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
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <Helmet>
                <title>Login | Language School</title>
            </Helmet>

            <div className="min-h-screen hero bg-base-200">
                <div className="flex-col hero-content lg:flex-row-reverse">
                    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <h2 className='font-bold'>Login Please</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="mt-6 form-control">
                                <input disabled={false} className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;