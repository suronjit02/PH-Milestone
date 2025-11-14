import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext/AuthContext';

const Home = () => {

    const authInfo = use( AuthContext );
    console.log(authInfo);
    return (
        <div>
            <h1>home</h1>
        </div>
    );
};

export default Home;