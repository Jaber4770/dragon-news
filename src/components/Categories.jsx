import React, { use } from 'react';
import { NavLink } from 'react-router';


const categoryPromise = fetch('/categories.json').then(res => res.json());


const Categories = () => {

    const category = use(categoryPromise);

    return (
        <div className=''>
            <h1 className='font-bold'>All categories ({category.length})</h1>
            <div className='flex flex-col py-3'>
                {
                    category.map(cat => <NavLink
                        to={`/category/${cat.id}`}
                        className='py-2 font-semibold text-accent hover:bg-base-300 px-2'
                        key={cat.id}>
                        {cat.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;