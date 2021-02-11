import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './Home/home.component';

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
                <Route component={NotFound}></Route>
            </Switch>

        </BrowserRouter>
    )
}