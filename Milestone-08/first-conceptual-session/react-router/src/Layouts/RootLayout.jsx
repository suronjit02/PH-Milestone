import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>

            <Navbar />

            <main className='min-h-[calc(100vh-285px)]'>

                {/* <h1 className=' '>RootLayout</h1> */}

                <Outlet />
                
            </main>

            <Footer />

        </div>
    );
};

export default RootLayout;