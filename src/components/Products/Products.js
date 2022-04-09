import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import './Products.css';

const auth = getAuth(app);

const Products = () => {
    // const {user} = useFirebase();

    // using react-firebase-hooks in stead of our custom hook useFirebase()
    const [user] = useAuthState(auth);
    return (
        <div className='container'>
            <h2>THis is products page</h2>
            <p>Hello, who is there?</p>
            <p>This is {user ? user.displayName : 'voooot'}</p>
        </div>
    );
};

export default Products;