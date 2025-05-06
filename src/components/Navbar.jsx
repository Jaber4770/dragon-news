import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import loginIcon from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = use(AuthContext);
    const handleLogout = () => {
        logout()
            .then(logout => alert("Logout done", logout))
        .catch(error=>console.log(error))
    }
    return (
        <div className='flex justify-between py-4 items-center'>
            <div className=""></div>
            <div className="nav flex gap-3 text-accent font-semibold">
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/'>Home</NavLink>
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/about'>About</NavLink>
                <NavLink className='px-3 py-2 hover:bg-gray-200' to='/career'>Career</NavLink>
            </div>
            {
                user ? 
                    <div className='flex gap-4'>
                        <span>{user.email}</span>
                        {user ? <img className='w-[50px]' src={user.photoURL} alt="" /> : <img src={loginIcon} alt="" />}<Link to="/auth/login"
                            onClick={handleLogout}
                        className='btn btn-primary'>Logout</Link></div>
                    :
                    <div className="login-btn flex gap-2">
                    <img src={loginIcon} alt="" />
                    <Link to='/auth/login' className='btn btn-primary px-8 text-white'>Login</Link>
                    </div>
                
            }
        </div>
    );
};

export default Navbar;