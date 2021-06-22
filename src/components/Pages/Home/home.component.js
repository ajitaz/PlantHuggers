import React from 'react';
import { Category } from '../../Section/category/category.component';
import { Header } from '../../Section/Header/header.component';
import { NewArrival } from '../../Section/newArrival/newArrival.component';
import { Article } from '../../Section/Article/article.component';
import { Nursery } from '../../Section/Partner_Nursery/partnerNursery.component';

export const Home = () => {

    return (
        <div>
            <Header />
            <NewArrival />
            <Category />
            <Nursery />
            <Article />
        </div>
    )
}