import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
    return (
        <div>

            <Navbar />
            
            <main className='min-h-[calc(100vh-285px)]'>
                <h1>This is a Contact page.</h1>
            </main>

            <Footer />
            
        </div>
    );
};

export default Contact;