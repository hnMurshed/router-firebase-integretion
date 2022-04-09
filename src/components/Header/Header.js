import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const {user, handleSignOut} = useFirebase();
    return (
        <div className='header'>
            <div className='navbar container'>
                <span className='brand'>Router Firebase Integration</span>
                    <nav>
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/reviews'>Reviews</Link>
                    </nav>
                    <div>
                        {
                            user?.uid ? <>
                            <span>{user.displayName}</span>
                            <button onClick={handleSignOut} className='login'>Sign Out</button>
                            <img src={user.photoURL} alt="" />
                            </> : <><Link className='register' to='/register'>Register</Link>
                            <Link className='login' to='/login'>Login</Link></>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Header;