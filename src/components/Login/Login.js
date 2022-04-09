import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import './Login.css';
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then( () => {
            navigate(from, {replace: true})
        })
    }
    return (
        <div className='container'>
            <h3>Please Login</h3>

            {/* Sign In with google */}
            <div className='popup-signin-box'>
                <h4>Sign In with</h4>
                <button onClick={handleSignInWithGoogle}>Google</button>
            </div>

            {/* sign in with email and password */}
            <form action="" className='form'>
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <label htmlFor="password">Your Password</label>
                <input type="password" name="password" id="password" placeholder='Your Password' />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;