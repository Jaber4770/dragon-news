import React, { Suspense } from 'react';
import Categories from '../categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<span>Loading...</span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;