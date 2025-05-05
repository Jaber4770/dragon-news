import React from 'react';
import { NavLink } from 'react-router';
import loginIcon from '../assets/user.png'

const Navbar = () => {
    return (
        <div className='flex justify-between py-4 items-center'>
            <div className=""></div>
            <div className="nav flex gap-3 text-accent font-semibold">
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/'>Home</NavLink>
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/about'>About</NavLink>
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex gap-2">
                <img src={loginIcon} alt="" />
                <button className='btn btn-primary px-8 text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;