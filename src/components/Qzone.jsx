import React from 'react';
import swimmingImage from '../assets/swimming.png';
import classImg from '../assets/class.png';
import PlayGround from '../assets/playground.png';

const Qzone = () => {
    return (
        <div className='bg-base-200 py-4 px-2 rounded-sm'>
            <h1 className='text-2xl font-semibold'>Q-Zone</h1>
            <div className='space-y-5'>
                <img className='w-full' src={swimmingImage} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={PlayGround} alt="" />
            </div>
        </div>
    );
};

export default Qzone;