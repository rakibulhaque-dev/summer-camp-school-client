import React from 'react';
import useAuth from '../../hooks/useAuth';
import socialImg from '../../../src/assets/banner/socialia.png';
const SocialLogin = () => {
    const { googleSignIn } = useAuth();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
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