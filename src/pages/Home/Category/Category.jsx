// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import NewsCart from "../NewsCart/NewsCart";

const Category = () => {
    const {id} = useParams()
    const categoryNews = useLoaderData()
    return (
        <div>
            {id && <h2>this category news: {categoryNews.length}</h2>}
            {
                categoryNews.map(news => <NewsCart 
                    key={news._id}
                    news = {news}
                    ></NewsCart>)
            }
        </div>
    );
};

export default Category;