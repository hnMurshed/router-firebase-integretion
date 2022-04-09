import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../../hooks/useFirebase';
import './Home.css';

const auth = getAuth(app);

const Home = () => {
    // const {user} = useFirebase();

    // using react-firebase-hooks in stead of our custom hook useFirebase()
    const [user] = useAuthState(auth)
    return (
        <div className='container'>
            <h2>This is Home</h2>
            <p>Current user: {user ? user.displayName : 'No user'}</p>
        </div>
    );
};

export default Home;