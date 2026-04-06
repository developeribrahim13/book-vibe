import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
            <nav className='flex justify-between max-w-[80%] mx-auto py-5'>
                <h1 className='text-2xl font-bold'>Book Vibe</h1>
                <ul className='flex justify-between gap-8 items-center'>
                    <NavLink to={"/"} className={({isActive})=>`font-semibold ${isActive?"border border-[#23BE0A] text-[#23BE0A] px-3 py-1 rounded-lg":""}`}>Home</NavLink>
                    <NavLink to={"/books"} className={({isActive})=>`font-semibold ${isActive?"border border-[#23BE0A] text-[#23BE0A] px-3 py-1 rounded-lg":""}`}>Listed Books</NavLink>
                    <NavLink to={"/onno-kichu"} className={({isActive})=>`font-semibold ${isActive?"border border-[#23BE0A] text-[#23BE0A] px-3 py-1 rounded-lg":""}`}>Pages to Read</NavLink>
                </ul>
                <div className='flex gap-3'>
                    <button className='btn rounded-lg bg-[#23BE0A] text-white'>Sign in</button>
                    <button className='btn bg-cyan-500 rounded-lg text-white'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;