import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex bg-base-300 p-3'>
            <span className='text-white font-bold bg-secondary px-2 py-2'>Latest</span> 
            <Marquee pauseOnHover={true} className="flex gap-5 font-semibold">
                <p>Dr. Mohammad Yunus is a Bangladeshi social entrepreneur and economist, renowned for pioneering the concepts of microcredit and microfinance to combat poverty.</p>
                <p>He founded Grameen Bank, which provides small loans to the impoverished without requiring collateral, empowering millions of people, especially women, around the world.</p>
                <p>Dr. Yunus was awarded the Nobel Peace Prize in 2006 for his efforts to create economic and social development from below through microcredit.</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;