import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet, useNavigation } from 'react-router';
import Loading from '../Components/Loading';

const RootLayout = () => {

    const navigation = useNavigation();

    return (
        <div>

            <Navbar />

            {navigation.state === "loading" ? (
                <Loading />
            ) : (
                <main className='min-h-[calc(100vh-285px)]'>
                    <Outlet />
                </main>
            )}


            <Footer />

        </div>
    );
};

export default RootLayout;