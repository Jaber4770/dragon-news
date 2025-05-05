import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCart from '../../components/NewsCart';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return
        } else if (id == '1') {
            const breakingNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(breakingNews);
        } else {
            const MatchedNews = data.filter(news => news.category_id == id);
            setCategoryNews(MatchedNews);
        }
    }, [data, id]);


    return (
        <div>
            <h1 className='mb-5 font-semibold'>Total <span className='text-secondary'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(CatNews => <NewsCart
                        key={CatNews.id}
                        CatNews={CatNews}></NewsCart>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;