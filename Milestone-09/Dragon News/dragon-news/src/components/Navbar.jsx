import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-5'>
            <div className='left-div'></div>
            <div className='flex gap-5 text-accent'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className=' flex gap-3'>
<img src={user} alt="user" />
                <button className='btn btn-primary px-5'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;