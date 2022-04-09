import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='navbar container'>
                <span>Router Firebase Integration</span>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/reviews'>Reviews</Link>
                    </nav>
                    <div>
                        <Link className='register' to='/register'>Register</Link>
                        <Link className='login' to='/login'>Login</Link>
                    </div>
            </div>
        </div>
    );
};

export default Header;