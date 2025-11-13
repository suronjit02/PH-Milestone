import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <>

            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
            
        </>
    );
};

export default RootLayout;