import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Products } from './common/Products/products.component';
import { Home } from './Home/home.component';
import { Shop } from './Shop/shop.component';

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
                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}