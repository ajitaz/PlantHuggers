import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products } from './Pages/Products/products.component';
import { Home } from './Pages/Home/home.component';
import { Nursery } from '../components/Pages/Nursery/nursery.component';
import { Shop } from '../components/Pages/Shop/shop.component';
import { Articles } from './Pages/Articles/articles.component'
const NotFound = () => {
    return(
        <div>
            <img src="images/PageNotFound.png" alt="Not Found"></img>
        </div>
    )
}

export const AppRouting = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/shop" component={Shop}></Route>
                <Route exact path="/products" component={Products}></Route>
                <Route exact path="/nursery" component={Nursery}></Route>
                <Route exact path="/articles" component={Articles}></Route>
                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}