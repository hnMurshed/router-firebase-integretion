import React from 'react';
import './Register.css';

const Register = () => {
    return (
        <div className='container'>
            <h3>Please Register!!</h3>
            <form action="" className='form'>
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" placeholder='Your Name' />
                <label htmlFor="email">Your Email</label>
                <input type="email" name="email" id="email" placeholder='Your Email' />
                <label htmlFor="password">Your Password</label>
                <input type="password" name="password" id="password" placeholder='Your Password' />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;