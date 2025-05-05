import React from 'react';
import { CiFacebook } from 'react-icons/ci';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className=''>
            <h1 className='font-semibold text-2xl'>Find us on</h1>
            <div>
                <div className='flex hover:bg-base-300 items-center text-2xl px-2 gap-2 border-1 border-gray-500 px-4 py-2'>
                    <CiFacebook className='' size={35}/>
                    <span className='font-semibold text-accent'>Facebook</span>
                </div>
                <div className='flex hover:bg-base-300 items-center text-2xl px-2 gap-2 border-1 border-t-0 border-b-0 border-gray-500 px-4 py-2'>
                    <FaTwitter className='' size={35}/>
                    <span className='font-semibold text-accent'>Twitter</span>
                </div>
                <div className='flex hover:bg-base-300 items-center text-2xl px-2 gap-2 border-1 border-gray-500 px-4 py-2'>
                    <FaInstagram className='' size={35}/>
                    <span className='font-semibold text-accent'>Instagram</span>
                </div>
            </div>
        </div>
    );
};

export default FindUs;