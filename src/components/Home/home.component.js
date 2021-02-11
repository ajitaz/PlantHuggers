import React from 'react';
import { Category } from '../category/category.component';
import { Footer } from '../common/footer/footer.component';
import { Header } from '../Header/header.component';
import { FeatureComp } from '../featureProduct/feature.component';
import { NewArrival } from '../newArrival/newArrival.component';

export const Home = () => {
    return (
        <div>
            <Header />
            <NewArrival />
            <Category />
            <FeatureComp />
            <Footer />
        </div>
    )
}