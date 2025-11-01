import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <div className=''>

            <Navbar />

            <main className='min-h-[calc(100vh-285px)]'>
                <h1 className=' '>Welcome To Home</h1>
            </main>

            <Footer />

        </div>
    );
};

export default Home;