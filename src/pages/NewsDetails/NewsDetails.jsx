import React, { useEffect, useState } from 'react';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData, useParams } from 'react-router';
import Header from '../../components/Header';
import RightAside from '../../components/homelayout/RightAside';

const NewsDetails = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const newsData = useLoaderData();

    useEffect(() => {
        const matchedNewsData = newsData.find(news => news.id == id);
        setData(matchedNewsData);
    }, [id, newsData])
    const { title, thumbnail_url, details,category_id } = data;

    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto gap-5 grid grid-cols-12'>
                <section className='col-span-9'><h1 className='text-accent text-2xl font-semibold'>Dragon News</h1>
                    <div className='pt-5'>
                        <img className='w-full' src={thumbnail_url} alt="" />
                        <h1 className='text-accent text-2xl font-semibold py-4'>{title}</h1>
                        <p className='text-accent text-justify'>{details}</p>
                    </div>
                    <div className='mt-5'>
                        <Link className='btn bg-secondary text-white px-2 py-1 flex justify-center gap-2 items-center' to={`/category/${category_id}`}><FaRegArrowAltCircleLeft className='text-white' />
                            All news in this category</Link>
                    </div>
                </section>
                <section className='col-span-3 sticky top-0 h-fit'>
                    <RightAside></RightAside>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;