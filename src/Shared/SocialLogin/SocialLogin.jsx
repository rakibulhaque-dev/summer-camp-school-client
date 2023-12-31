import React from 'react';
import useAuth from '../../hooks/useAuth';
import socialImg from '../../../src/assets/banner/socialia.png';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log('Logged by G: ', loggedUser);
                const saveUser = {
                    displayName: loggedUser.displayName,
                    email: loggedUser.email,
                    photoURL: loggedUser.photoURL,
                    role: 'student',
                    
                }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div className='text-center'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn}><img src={socialImg} alt="" /></button>
        </div>
    );
};

export default SocialLogin;