import React from 'react';
import useAuth from '../../hooks/useAuth';
import socialImg from '../../../src/assets/banner/socialia.png';
import { useLocation, useNavigate } from 'react-router-dom';


const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        const location = useLocation();
        const navigate = useNavigate();
        const from = location.state?.from?.pathname || '/';

        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='text-center'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn}><img src={socialImg} alt="" /></button>
        </div>
    );
};

export default SocialLogin;