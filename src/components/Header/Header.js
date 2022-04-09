import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='header'>
            <div className='navbar container'>
                <span className='brand'>Router Firebase Integration</span>
                    <nav>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/products'>Products</CustomLink>
                        <CustomLink to='/orders'>Orders</CustomLink>
                        <CustomLink to='/reviews'>Reviews</CustomLink>
                    </nav>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        {
                            user?.uid ? <>
                            <button onClick={() => signOut(auth)} className='login'>Sign Out</button>
                            <span style={{marginLeft: '5px'}}>{user.displayName}</span>
                            <img style={{marginLeft: '5px', borderRadius: '50%'}} className='user-profile' src={user.photoURL} alt="" />
                            </> : <><Link className='register' to='/register'>Register</Link>
                            <Link className='login' to='/login'>Login</Link></>
                        }
                    </div>
            </div>
        </div>
    );
};

export default Header;