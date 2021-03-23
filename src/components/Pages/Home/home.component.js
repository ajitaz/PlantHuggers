import React from 'react';
import { NavBar } from '../../common/navbar/nav.component';
import { Category } from '../../Section/category/category.component';
import { Footer } from '../../common/footer/footer.component';
import { Header } from '../../Section/Header/header.component';
import { FeatureComp } from '../../Section/featureProduct/feature.component';
import { NewArrival } from '../../Section/newArrival/newArrival.component';
import { Article } from '../../Section/Article/article.component';
import { Nursery } from '../../Section/Partner_Nursery/partnerNursery.component';

export const Home = () => {

    window.scrollTo(0, 0);

    return (
        <div>
            <NavBar isLoggedIn={false} />
            <Header />
            <NewArrival />
            <Category />
            <FeatureComp />
            <Article />
            <Nursery />
            <Footer />
        </div>
    )
}