import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='container'>
            <h3>Please Login</h3>
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